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
    path.join(base, "app", "template-contato.html"),
    "utf8"
  );
  cachedDemoTemplate = await fs.readFile(
    path.join(base, "app", "template-demo.html"),
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

  let to = email;
  if (type === "contact") {
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields for contact: name, email, subject, message",
        }),
        { status: 400 }
      );
    }
  } else if (type === "demo") {
    if (!name || !email || !company || !phone) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields for demo: name, email, company, phone",
        }),
        { status: 400 }
      );
    }
    subject = "New Demo Request";
    to = email;
  } else {
    return new Response(
      JSON.stringify({ error: 'Invalid type. Must be "contact" or "demo"' }),
      { status: 400 }
    );
  }

  if (!to || !subject || !name) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: to, subject, name" }),
      { status: 400 }
    );
  }

  let emailHtmlContact = cachedContactTemplate?.replace(
    "[Nome do Cliente]",
    name
  );
  emailHtmlContact = emailHtmlContact?.replace("[email do Cliente]", email);
  emailHtmlContact = emailHtmlContact?.replace("[email do Cliente]", message);
  emailHtmlContact = emailHtmlContact?.replace("[subject do Cliente]", subject);

  let emailHtmlDemo = cachedDemoTemplate?.replace("[Nome do Cliente]", name);
  emailHtmlDemo = cachedDemoTemplate?.replace("[telefone do Cliente]", phone);
  emailHtmlDemo = cachedDemoTemplate?.replace("[empresa do Cliente]", company);

  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: type === "contact" ? emailHtmlContact : emailHtmlDemo,
        },
      },
    },
    Source: process.env.EMAIL_SOURCE!,
  };

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
