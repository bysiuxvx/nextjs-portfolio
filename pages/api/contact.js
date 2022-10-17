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
    subject: `Portfolio message from ${name} ${email}`,
    html: `<div style="border: 1px solid black;padding: 30px;font-family: sans-serif;line-height: 1.5;min-height: 50vh;">
    <h2 style="font-size: 24px; font-weight: normal;">Message from: <span style="font-weight: bold;"> ${name} ${email}</span>
    <hr>
    <p style="font-size: 18px">${message}</p>
     </div>
     `,
  });
  setTimeout(() => {
    res.send(true);
  }, 3000);
}
