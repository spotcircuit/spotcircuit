import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'novahokie1998@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this up in your environment variables
  }
});

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    // Verify hCaptcha token
    const verificationUrl = 'https://hcaptcha.com/siteverify';
    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `response=${token}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    });

    const verificationData = await verificationResponse.json();

    if (!verificationData.success) {
      return NextResponse.json(
        { error: 'Invalid captcha' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    await transporter.sendMail({
      from: 'novahokie1998@gmail.com',
      to: 'novahokie1998@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
