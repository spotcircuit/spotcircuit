"use client";

import React from 'react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Script from 'next/script';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import SpeakableSchema from '../components/SpeakableSchema';
import FaqSchema from '../components/FaqSchema';
import EntitySchema from '../components/EntitySchema';

const ContactPage = () => {
  // Define FAQ items for schema markup
  const faqItems = [
    {
      question: "How quickly can you implement solutions for my business?",
      answer: "Our implementation timeline varies based on your specific needs and the complexity of the solutions required. Typically, we can begin showing results within 2-4 weeks, with full implementation completed within 1-3 months."
    },
    {
      question: "Do I need technical knowledge to use your services?",
      answer: "Not at all. We handle all the technical aspects, and our solutions are designed with user-friendly interfaces. Our team provides comprehensive training and ongoing support to ensure you can easily use and benefit from our systems."
    },
    {
      question: "How do you price your services?",
      answer: "We offer flexible pricing models based on your business size and specific needs. After an initial consultation, we'll provide a customized quote that aligns with your budget and expected ROI. We believe in transparent pricing with no hidden fees."
    },
    {
      question: "Can you integrate with my existing software and tools?",
      answer: "Yes, we specialize in integrating with popular home service business software like ServiceTitan, Jobber, Housecall Pro, and many others. Our solutions are designed to enhance your existing tech stack, not replace it."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer ongoing support including regular check-ins, performance monitoring, troubleshooting, and system updates. Our team is available via email, phone, and chat to address any questions or concerns that arise."
    }
  ];

  // Organization schema with contactPoint
  const organizationContactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.spotcircuit.com/#organization",
    "name": "SpotCircuit",
    "url": "https://www.spotcircuit.com",
    "logo": "https://www.spotcircuit.com/spotcircuit-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Schema Markup */}
      <Script id="organization-contact-schema" type="application/ld+json">
        {JSON.stringify(organizationContactSchema)}
      </Script>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.spotcircuit.com", position: 1 },
          { name: "Contact", url: "https://www.spotcircuit.com/contact", position: 2 }
        ]} 
      />
      <SpeakableSchema cssSelectors={["p.text-xl.text-gray-300"]} />
      <FaqSchema faqs={faqItems} />
      <EntitySchema 
        name="SpotCircuit Contact Information"
        description="Get in touch with SpotCircuit for AI-powered automation and SEO solutions for your home service business."
        url="https://www.spotcircuit.com/contact"
        type="ContactPage"
        relatedEntities={[
          {
            name: "Home Service Business Automation",
            url: "https://www.spotcircuit.com/services",
            description: "AI-powered automation solutions for home service businesses."
          },
          {
            name: "Free Consultation",
            url: "https://calendar.app.google/Lh8TY5PBrDSZvjR87",
            description: "Schedule a free consultation with our team."
          }
        ]}
      />      <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/contact.webp"
          alt="Contact SpotCircuit"
          className="h-[75px] w-full object-cover overflow-hidden"
        />
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="gradient-text">Touch</span></h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Ready to transform your home service business with AI-powered automation? We're here to help you get started.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Options Section */}
        <section id="contact-options" className="py-16 px-4 bg-gray-900 overflow-hidden relative">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl"
              >
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Send Us a Message</h2>
                  <p className="text-gray-300">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </motion.div>
              
              {/* Schedule a Call */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl flex flex-col"
              >
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <FaCalendarAlt className="text-white text-2xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Schedule a Call</h2>
                  <p className="text-gray-300">
                    Book a 30-minute consultation with our team to discuss your specific needs and how we can help.
                  </p>
                </div>
                
                <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="relative w-48 h-48 mb-8 opacity-80">
                    <Image
                      src="/static/images/calendar-illustration.svg"
                      alt="Schedule a call"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <a 
                      href="https://calendar.app.google/Lh8TY5PBrDSZvjR87" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      Book a Free Consultation
                      <FaArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Get answers to common questions about working with SpotCircuit.
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How quickly can you implement solutions for my business?",
                  answer: "Our implementation timeline varies based on your specific needs and the complexity of the solutions required. Typically, we can begin showing results within 2-4 weeks, with full implementation completed within 1-3 months."
                },
                {
                  question: "Do I need technical knowledge to use your services?",
                  answer: "Not at all. We handle all the technical aspects, and our solutions are designed with user-friendly interfaces. Our team provides comprehensive training and ongoing support to ensure you can easily use and benefit from our systems."
                },
                {
                  question: "How do you price your services?",
                  answer: "We offer flexible pricing models based on your business size and specific needs. After an initial consultation, we'll provide a customized quote that aligns with your budget and expected ROI. We believe in transparent pricing with no hidden fees."
                },
                {
                  question: "Can you integrate with my existing software and tools?",
                  answer: "Yes, we specialize in integrating with popular home service business software like ServiceTitan, Jobber, Housecall Pro, and many others. Our solutions are designed to enhance your existing tech stack, not replace it."
                },
                {
                  question: "What kind of support do you provide after implementation?",
                  answer: "We offer ongoing support including regular check-ins, performance monitoring, troubleshooting, and system updates. Our team is available via email, phone, and chat to address any questions or concerns that arise."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-6 bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>    </div>
  );
};

export default ContactPage;
