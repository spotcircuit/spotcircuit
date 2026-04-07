'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaComment, FaSpinner } from 'react-icons/fa';
import { sendContactEmail } from '@/lib/actions';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setFormStatus({
        isSubmitting: true,
        isSubmitted: false,
        isError: false,
        message: '',
      });

      // Get the reCAPTCHA token
      const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
      
      // Send the form data along with the token
      const result = await sendContactEmail({
        ...formData,
        token,
      });

      if (result.success) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error: any) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {formStatus.isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl border border-green-500/30 mb-8"
        >
          <h3 className="text-2xl font-semibold text-green-500 mb-3">Message Sent!</h3>
          <p className="text-gray-200">
            {formStatus.message}
          </p>
          <button
            onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Company Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding className="text-gray-400" />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FaComment className="text-gray-400" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows={5}
              className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-70"
            >
              {formStatus.isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>

          {formStatus.isError && (
            <div className="bg-red-500/20 border border-red-500/30 p-4 rounded-lg text-center">
              <p className="text-red-400">{formStatus.message}</p>
            </div>
          )}
          
          {/* reCAPTCHA disclaimer */}
          <div className="text-center text-xs text-gray-500 mt-4">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" className="text-blue-400 hover:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
