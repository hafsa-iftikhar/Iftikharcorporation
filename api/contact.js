import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ictextilelimited@gmail.com",
        pass: "ajtefynweopvdopc", // 👈 PUT PASSWORD HERE
      },
    });

    await transporter.sendMail({
      from: email,
      to: "ictextilelimited@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Email failed to send" });
  }
}