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
    html: `<div style={style.container}>
    <h2 style={style.header}>Message from: <span style={style.sender}> ${name} ${email}</span>
    <p style={style.message}>${message}</p>
     </div>
     `,
  });

  const style = {
    container: {
      border: "1px solid black",
      padding: "30px",
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      minHeight: "50vh",
    },
    header: {
      fontSize: "24px",
      fontWeight: "normal",
    },
    sender: {
      fontWeight: "bold",
    },
    message: {
      fontSize: "18px",
    },
  };
}
