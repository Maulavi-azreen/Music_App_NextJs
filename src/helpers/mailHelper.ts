import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

import User  from '@/models/userModel';

export const sendEmail = async ({ email, emailType, userId }: { email: string, emailType: 'VERIFY' | 'RESET', userId: string }) => {
  try {
    const hashedToken=bcrypt.hashSync(userId.toString(),10);

    if(emailType ==='VERIFY'){
        await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000});
    }
    else if(emailType ==='RESET'){
        await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+3600000});
    }
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        }
      });

    const mailOptions={
        from: '130750@aiscpune.org', // sender address
        to: email, // list of receivers
        subject: emailType === 'RESET' 
        ? 'Reset Password Request - Music App' 
        : 'Verify Your Email - Music App',
        html: emailType === 'RESET'
        ? `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2>Reset Your Password</h2>
                <p>Click the button below to reset your password.</p>
                 <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}" 
                 style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; 
                 border-radius: 5px;">Reset Your Password</a>" 
                <p>If you didn't request this, ignore this email.</p>
            </div>
        `
        : `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
            <h2>Welcome to the Music App</h2>
                <h2>Verify Your Email</h2>
                <p>Please verify your email by clicking the button below.</p>
                <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}" 
                style="background-color: #28a745; color: white; padding: 10px 20px; 
                text-decoration: none; border-radius: 5px;">
                               Verify Email</a>" 
                <p>If you didn't sign up, ignore this email.</p>
            </div>
        `
};
    const mailResponse= await transporter.sendMail(mailOptions);
    return mailResponse
    
  } catch (error) {
    console.log("object error: " + error)
  }
}