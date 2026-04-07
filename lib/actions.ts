'use server';

import nodemailer from 'nodemailer';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  token: string;
}

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend (production-ready email service)
    const { data, error } = await resend.emails.send({
      from: 'SpotCircuit Contact <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'info@spotcircuit.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
      replyTo: formData.email,  // Set reply-to as the submitter's email
    });
    
    // Check for errors
    if (error) {
      console.error('Error sending email with Resend:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
    
    console.log('Email sent successfully with ID:', data?.id);

    return { success: true };
  } catch (error: any) {
    console.error('Detailed error in sendContactEmail:', error); 
    return {
      success: false,
      message: `Failed to send email: ${error.message || 'Unknown error'}`,
    };
  }
}
