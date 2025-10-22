import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import fs from "fs/promises";
import path from "path";

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

let cachedContactTemplate: string | null = null;
let cachedDemoTemplate: string | null = null;

async function loadTemplates() {
  if (cachedContactTemplate && cachedDemoTemplate) return;
  const base = process.cwd();
  cachedContactTemplate = await fs.readFile(
    path.join(base, "app", "lib/email-templates/template-contato.html"),
    "utf8"
  );
  cachedDemoTemplate = await fs.readFile(
    path.join(base, "app", "lib/email-templates/template-demo.html"),
    "utf8"
  );
}

export async function POST(req: Request) {
  await loadTemplates();

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  let { name, email, subject, message, company, phone, type } = body;

  // Validação de campos por tipo
  if (type === "contact") {
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields for contact: name, email, subject, message",
        }),
        { status: 400 }
      );
    }
  } else if (type === "demo") {
    if (!name || !email || !company || !phone) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields for demo: name, email, company, phone",
        }),
        { status: 400 }
      );
    }
    subject = "Solicitação de Demonstração - Ordemly";
  } else {
    return new Response(
      JSON.stringify({
        error: 'Invalid type. Must be "contact" or "demo"',
      }),
      { status: 400 }
    );
  }

  // Formatação de data e hora
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const timeFormatted = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const currentYear = now.getFullYear().toString();

  // Preparação do HTML do email
  let emailHtml: string;

  if (type === "contact") {
    emailHtml = cachedContactTemplate!;
    emailHtml = emailHtml.replace(/\[contact-nome\]/g, name || "");
    emailHtml = emailHtml.replace(/\[contact-email\]/g, email || "");
    emailHtml = emailHtml.replace(/\[contact-subject\]/g, subject || "");
    emailHtml = emailHtml.replace(/\[contact-message\]/g, message || "");
    emailHtml = emailHtml.replace(/\[contact-date\]/g, dateFormatted);
    emailHtml = emailHtml.replace(/\[contact-time\]/g, timeFormatted);
    emailHtml = emailHtml.replace(/\[current-year\]/g, currentYear);
  } else {
    emailHtml = cachedDemoTemplate!;
    emailHtml = emailHtml.replace(/\[demo-nome\]/g, name || "");
    emailHtml = emailHtml.replace(/\[demo-email\]/g, email || "");
    emailHtml = emailHtml.replace(/\[demo-phone\]/g, phone || "");
    emailHtml = emailHtml.replace(/\[demo-company\]/g, company || "");
    emailHtml = emailHtml.replace(/\[demo-date\]/g, dateFormatted);
    emailHtml = emailHtml.replace(/\[demo-time\]/g, timeFormatted);
    emailHtml = emailHtml.replace(/\[current-year\]/g, currentYear);
  }

  // Configuração do email
  const params = {
    Destination: {
      ToAddresses: [email],
      CcAddresses: [process.env.EMAIL_SOURCE].filter(
        (e): e is string => e !== undefined
      ),
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
    },
    Source: process.env.EMAIL_SOURCE!,
  };

  // Envio do email
  try {
    const command = new SendEmailCommand(params);
    const response = await ses.send(command);
    return new Response(JSON.stringify({ messageId: response.MessageId }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
