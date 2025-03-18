import nodemailer from 'nodemailer';
import crypto from 'crypto';
import User from '@/models/userModel';

export const sendEmail = async ({ email, emailType, userId }: { email: string, emailType: 'VERIFY' | 'RESET', userId: string }) => {
  try {
    // Generate a random token instead of using bcrypt
    const token = crypto.randomBytes(32).toString('hex');

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 3600000, // 1 hour expiry
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: token,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'yesoher853@erapk.com',
      to: email,
      subject: emailType === 'RESET' ? 'Reset Password Request - Music App' : 'Verify Your Email - Music App',
      html: emailType === 'RESET'
        ? `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
              <h2>Reset Your Password</h2>
              <p>Click the button below to reset your password.</p>
              <a href="${process.env.DOMAIN}/resetpassword?token=${token}" 
                style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Reset Your Password
              </a>
              <p>If you didn't request this, ignore this email.</p>
            </div>
          `
        : `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
              <h2>Welcome to the Music App</h2>
              <h2>Verify Your Email</h2>
              <p>Please verify your email by clicking the button below.</p>
              <a href="${process.env.DOMAIN}/verify-email?token=${token}" 
                style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Verify Email
              </a>
              <p>If you didn't sign up, ignore this email.</p>
            </div>
          `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return { success: true, response: mailResponse, token }; // Return token for debugging if needed
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to send email');
  }
};