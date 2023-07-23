// server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'MyLecturesProject2023@gmail.com',
    pass: 'Itsik1234Esti',
  },
});

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message: string;
}

app.post('/forgot-password', (req: Request<{}, {}, ForgotPasswordRequest>, res: Response<ForgotPasswordResponse>) => {
  const { email } = req.body;

  const resetLink = `https://your-app.com/reset-password?email=${email}`;

  const mailOptions = {
    from: 'MyLecturesProject2023@gmail.com',
    to: email,
    subject: 'איפוס סיסמה',
    html: `
      <p>בקשתך לאיפוס סיסמה.</p>
      <p>הקש על הלינק המצורף לאיפוס סיסמה:</p>
      <a href="${resetLink}">${resetLink}</a>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
