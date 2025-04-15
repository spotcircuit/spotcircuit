// Test script to send an email using Nodemailer with SMTP
require('dotenv').config();
const nodemailer = require('nodemailer');

async function main() {
  // Create a test SMTP transporter using Gmail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'novahokie1998@gmail.com', // your Gmail address
      pass: process.env.SMTP_PASSWORD, // your app password (not your regular password)
    },
  });

  console.log('Sending test email with Nodemailer...');
  
  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: '"SpotCircuit Contact" <novahokie1998@gmail.com>', // sender address
      to: 'novahokie1998@gmail.com', // list of receivers
      subject: 'Test Email from SpotCircuit (Nodemailer)', // Subject line
      text: 'This is a test email to verify that Nodemailer is working correctly.', // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #4a6ee0;">SpotCircuit Email Test (Nodemailer)</h2>
          <p>This is a test email to verify that Nodemailer is working correctly with your SpotCircuit website.</p>
          <p>If you're receiving this email, it means your email configuration is working properly!</p>
          <p>Time sent: ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated test message. No action is required.</p>
        </div>
      `, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
    console.log('\nTROUBLESHOOTING TIPS:');
    console.log('1. Make sure you\'ve set up an App Password in your Google account');
    console.log('2. Check that you\'ve added the App Password to your .env file as SMTP_PASSWORD');
    console.log('3. Ensure that Less secure app access is enabled in your Google account');
  }
}

main().catch(console.error);
