const express = require('express');

const bodyParser = require('body-parser');

const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');



const app = express();

app.use(bodyParser.json());



const ses = new SESClient({

  region: 'us-east-2',

  credentials: {

   accessKeyId: process.env.AWS_ACCESS_KEY_ID,

   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY

  }

 });

  



// app.post('/send-email', async (req, res) => {

//   const { name, email, message } = req.body;



//   const params = {

//     Source: 'seu-email-verificado@dominio.com',

//     Destination: { ToAddresses: ['seu-email-verificado@dominio.com'] },

//     Message: {

//       Subject: { Data: 'Nova mensagem do site' },

//       Body: {

//         Text: { Data: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}` }

//       }

//     }

//   };



//   try {

//     await ses.send(new SendEmailCommand(params));

//     res.send({ success: true });

//   } catch (err) {

//     console.error(err);

//     res.status(500).send({ success: false, error: err.message });

//   }

// });



app.post('/send-email', async (req, res) => {



  // Load the AWS SDK for Node.js

// var AWS = require("aws-sdk");

// Set the region

// AWS.config.update({ region: "us-east-2", 

//   credentials: {

//     accessKeyId: 'DArlan',

//     secretAccessKey: 'Akon'

//   }

// });



var AWS = require('aws-sdk');

AWS.config.update({

  accessKeyId: 'DArlan',

  secretAccessKey: 'Akon',

  region: 'us-east-2'

});



// Create sendEmail params

var params = {

  Destination: {

    /* required */

    // CcAddresses: [

    //   "pedrohszpaka@gmail.com",

    //   /* more items */

    // ],

    ToAddresses: [

      // "pedrohszpaka@gmail.com",

      "gustavomaia334@gmail.com",

      /* more items */

    ],

  },

  Message: {

    /* required */

    Body: {

      /* required */

      Html: {

        Charset: "UTF-8",

        Data: `

          <!DOCTYPE html>



        <html lang="pt-br">



        <head>



        <meta charset="UTF-8">



        <meta name="viewport" content="width=device-width, initial-scale=1.0">



        <meta http-equiv="X-UA-Compatible" content="IE=edge">



        <title>Seu Título de Email Aqui</title>



        <style type="text/css">



          /* Estilos gerais e reset */



          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }



          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }



          img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }



          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f4f4f4; }







          /* Estilos para telas menores (celulares) */



          @media screen and (max-width: 600px) {



          .container {



            width: 100% !important;



            max-width: 100% !important;



          }



          }



        </style>



        </head>



        <body style="margin: 0 !important; padding: 0 !important; background-color: #f4f4f4;">







        <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">



          Esta é a prévia do seu email. Adicione algo que chame a atenção!



        </div>







        <table border="0" cellpadding="0" cellspacing="0" width="100%">



          <tr>



          <td bgcolor="#f4f4f4" align="center" style="padding: 20px 0 20px 0;">



            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="container">



             



            <tr>



              <td align="center" valign="top" style="padding: 20px 0; background-color: #ffffff;">



              <a href="https://www.seusite.com.br" target="_blank">



                <img alt="Logo da Sua Empresa" src="https://via.placeholder.com/200x50" width="200" style="display: block; width: 200px; max-width: 200px; min-width: 100px; font-family: Arial, sans-serif; color: #333333; font-size: 18px;" border="0">



              </a>



              </td>



            </tr>







            <tr>



              <td align="center" bgcolor="#ffffff">



              <a href="https://www.seusite.com.br" target="_blank">



                <img alt="Imagem de Destaque" src="https://via.placeholder.com/600x300" width="600" style="display: block; width: 100%; max-width: 100%; height: auto;" border="0">



              </a>



              </td>



            </tr>







            <tr>



              <td bgcolor="#ffffff" align="left" style="padding: 40px 30px 40px 30px; color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">



              <h1 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #111111;">Título Principal da Sua Mensagem</h1>



              <p style="margin: 0 0 20px 0;">Olá [Nome do Cliente],</p>



              <p style="margin: 0;">Este é o parágrafo principal do seu email. Escreva aqui sua mensagem de forma clara e objetiva. Você pode detalhar sua oferta, notícia ou comunicado. Tente manter os parágrafos curtos para facilitar a leitura.</p>



              </td>



            </tr>







            <tr>



              <td bgcolor="#ffffff" align="left">



              <table width="100%" border="0" cellspacing="0" cellpadding="0">



                <tr>



                <td align="center" style="padding: 0px 30px 40px 30px;">



                  <table border="0" cellspacing="0" cellpadding="0">



                  <tr>



                    <td align="center" style="border-radius: 5px;" bgcolor="#007bff">



                    <a href="https://www.seusite.com.br/link-do-botao" target="_blank" style="font-size: 18px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 5px; border: 1px solid #007bff; display: inline-block;">Clique Aqui</a>



                    </td>



                  </tr>



                  </table>



                </td>



                </tr>



              </table>



              </td>



            </tr>







            <tr>

              <td bgcolor="#eeeeee" align="center" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;">

              <p style="margin: 0 0 10px 0;">Você está recebendo este email porque se inscreveu em nosso site.</p>

              <p style="margin: 0 0 10px 0;">Sua Empresa &copy; 2025 | Todos os direitos reservados.<br>Rua Fictícia, 123 - Cidade, Estado</p>

              <p style="margin: 0;">

                <a href="https://www.seusite.com.br/cancelar-inscricao" target="_blank" style="color: #666666; text-decoration: underline;">Cancelar inscrição</a>



              </p>

              </td>

            </tr>

            </table>

            </td>

          </tr>

        </table>

        </body>

        </html>

        `,

      },

      // Text: {

      //   Charset: "UTF-8",

      //   Data: "teste1",

      // },

    },

    Subject: {

      Charset: "UTF-8",

      Data: "test2",

    },

  },

  Source: "danieltavares.mata@gmail.com" /* required */,

  // ReplyToAddresses: [

  //   "EMAIL_ADDRESS",

  //   /* more items */

  // ],

};

// Create the promise and SES service object

var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })

  .sendEmail(params)

  .promise();

// Handle promise's fulfilled/rejected states

sendPromise

  .then(function (data) {

    console.log(data.MessageId);

  })

  .catch(function (err) {

    console.error(err, err.stack);

  });

});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));