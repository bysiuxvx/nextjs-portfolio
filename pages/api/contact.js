export default function (req, res) {
  require("dotenv").config();
  const nodemailer = require("nodemailer");

  const { name, email, message } = req.body;

  const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: process.env.FROM_EMAIL_USERNAME,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
  });

  transport.sendMail({
    from: `${name} ${process.env.FROM_EMAIL_USERNAME}`,
    to: process.env.RECIPIENT_EMAIL_USERNAME,
    subject: "Portoflio message",
    html: `<div style="
    border: 1px solid black;
    padding: 30px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h2>Message from ${name} ${email}
    <p>${message}</p>
     </div>
`,
  });
}
