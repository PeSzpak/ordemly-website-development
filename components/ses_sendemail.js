// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "sa-east-1" });

// Create sendEmail params
var params = {
    Destination: {
        /* required */
        CcAddresses: [
            "danieltavares.mata@gmail.com",
            /* more items */
        ],
        ToAddresses: [
            "gustavomaia334@gmail.com",
            /* more items */
        ],
    },
    Message: {
        /* required */
        Body: {
            /* required */
            // Html: {
            //     Charset: "UTF-8",
            //     Data: "HTML_FORMAT_BODY",
            // },
            Text: {
                Charset: "UTF-8",
                Data: "teste1",
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: "test2",
        },
    },
    Source: "gustavomaia334@gmail.com" /* required */,
    // ReplyToAddresses: [
    //     "EMAIL_ADDRESS",
    //     /* more items */
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
