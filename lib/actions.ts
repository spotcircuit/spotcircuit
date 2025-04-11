'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  token: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${formData.token}`,
      { method: 'POST' }
    );
    
    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return { 
        success: false, 
        message: 'reCAPTCHA verification failed. Please try again.' 
      };
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@spotcircuit.com',
      to: 'info@spotcircuit.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
      replyTo: formData.email,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send your message. Please try again later.' 
    };
  }
}
