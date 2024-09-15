export default function (req, res) {
  require("dotenv").config()
  const nodemailer = require("nodemailer")

  const HOST = "smtp-mail.outlook.com"
  const PORT = 587

  const { name, email, message } = req.body

  const mailerConfig = {
    host: HOST,
    port: PORT,
    auth: {
      user: process.env.FROM_EMAIL_USERNAME,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }

  const transport = nodemailer.createTransport(mailerConfig)

  const fromAddress = `${name} <${process.env.FROM_EMAIL_USERNAME}>`
  const toAddress = process.env.RECIPIENT_EMAIL_USERNAME

  const responseBody = {
    from: fromAddress,
    to: toAddress,
    subject: `Message from ${name} (${email})`,
    html: `
      <div style="border: 1px solid #000; padding: 30px; font-family: sans-serif; line-height: 1.5; min-height: 50vh; background-color: #f9f9f9;">
        <h2 style="font-size: 24px; font-weight: normal; color: #333;">Message from: <strong>${name}</strong> (<a href="mailto:${email}" style="color: #1a0dab; text-decoration: none;">${email}</a>)</h2>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
        <p style="font-size: 18px; color: #555;">${message}</p>
      </div>
    `,
  }

  transport.sendMail(responseBody, (error, info) => {
    if (error) {
      console.error(error)
      res.status(500).send({ success: false, error: error.message })
    } else {
      res
        .status(200)
        .send({ success: true, message: "Email sent successfully" })
    }
  })
}
