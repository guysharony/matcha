import nodemailer from 'nodemailer';

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number("1025"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  async sendActivationEmail(to: string, token: string) {
    const activationLink = `http://your-website.com/activate/${token}`;

    await this.transporter.sendMail({
      from: '"Your Name" <your-email@example.com>',
      to: to,
      subject: 'Account Activation',
      text: `Please activate your account by clicking on the following link: ${activationLink}`,
      html: `<p>Please activate your account by clicking on the following link: <a href="${activationLink}">${activationLink}</a></p>`,
    });
  }
}

export const emailService = new EmailService();
