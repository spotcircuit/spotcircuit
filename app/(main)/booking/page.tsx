"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaVideo, FaPhoneAlt } from 'react-icons/fa';
import Script from 'next/script';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';
import FaqSchema from '@/app/components/FaqSchema';
import EntitySchema from '@/app/components/EntitySchema';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BookingPage() {
  // Define FAQ items for schema markup
  const faqItems = [
    {
      question: "Do I need to prepare anything?",
      answer: "No preparation is required, but having your website URL and any specific questions ready will help us make the most of our time together."
    },
    {
      question: "Is this really free?",
      answer: "Yes, the consultation is completely free with no obligation. We believe in providing value first."
    },
    {
      question: "What happens after the call?",
      answer: "If we're a good fit, we'll send you a customized proposal based on your needs. If not, you'll still walk away with valuable insights."
    },
    {
      question: "Can I reschedule if needed?",
      answer: "Absolutely. You'll receive a calendar invitation with options to reschedule if your availability changes."
    }
  ];

  // Schema for event
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "SpotCircuit Free Consultation",
    "description": "A 30-minute consultation to discuss your specific business needs and how SpotCircuit can help with AI-powered automation and SEO solutions.",
    "startDate": "2023-01-01T00:00:00Z", // Dynamic date will be set by calendar system
    "endDate": "2023-01-01T00:30:00Z", // Dynamic date will be set by calendar system
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://calendar.app.google/Lh8TY5PBrDSZvjR87"
    },
    "organizer": {
      "@type": "Organization",
      "@id": "https://spotcircuit.com/#organization",
      "name": "SpotCircuit",
      "url": "https://spotcircuit.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2023-01-01T00:00:00Z", // Will be dynamically updated
      "url": "https://calendar.app.google/Lh8TY5PBrDSZvjR87"
    }
  };

  return (
    <>      {/* Schema Markup */}
      <Script id="event-schema" type="application/ld+json">
        {JSON.stringify(eventSchema)}
      </Script>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://spotcircuit.com", position: 1 },
          { name: "Booking", url: "https://spotcircuit.com/booking", position: 2 }
        ]} 
      />
      <SpeakableSchema cssSelectors={["p.text-xl.text-blue-200"]} />
      <FaqSchema faqs={faqItems} />
      <EntitySchema 
        type="Service"
        name="Free Consultation Booking"
        description="Book a 30-minute consultation with SpotCircuit to discuss your specific needs and how we can help with AI-powered automation and SEO solutions."
        url="https://spotcircuit.com/booking"
        relatedEntities={[
          {
            name: "AI Implementation Process",
            url: "https://spotcircuit.com/process",
            description: "Learn about our implementation process.",
            type: "WebPage"
          },
          {
            name: "Home Service Business Automation",
            url: "https://spotcircuit.com/services",
            description: "AI-powered automation solutions for home service businesses.",
            type: "Service"
          }
        ]}
      />
    
      <main className="pt-24 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
              <FaCalendarAlt className="text-white text-2xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Call</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Book a 30-minute consultation with our team to discuss your specific needs and
            how we can help.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <FaClock className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">30-Minute Session</h3>
                    <p className="text-blue-200/80">
                      A focused discussion to understand your business goals and challenges.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <FaVideo className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Video or Phone Call</h3>
                    <p className="text-blue-200/80">
                      Choose your preferred method of communication.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <FaPhoneAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">No Obligation</h3>
                    <p className="text-blue-200/80">
                      Get expert advice with no pressure or commitment required.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 p-8 md:p-12 flex flex-col justify-center items-center">
              <img 
                src="/static/images/calendar-illustration.svg" 
                alt="Schedule a call" 
                className="w-48 h-48 mb-8 opacity-80"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200?text=Calendar";
                }}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a 
                  href="https://calendar.app.google/Lh8TY5PBrDSZvjR87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Book Your Free Consultation
                </a>
              </motion.div>
              
              <p className="text-sm text-blue-200/60 mt-4 text-center">
                Select a date and time that works for you. You'll receive a confirmation email with meeting details.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-2">Do I need to prepare anything?</h3>
              <p className="text-blue-200/80">
                No preparation is required, but having your website URL and any specific questions ready will help us make the most of our time together.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-2">Is this really free?</h3>
              <p className="text-blue-200/80">
                Yes, the consultation is completely free with no obligation. We believe in providing value first.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.7 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-2">What happens after the call?</h3>
              <p className="text-blue-200/80">
                If we're a good fit, we'll send you a customized proposal based on your needs. If not, you'll still walk away with valuable insights.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-2">Can I reschedule if needed?</h3>
              <p className="text-blue-200/80">
                Absolutely. You'll receive a calendar invitation with options to reschedule if your availability changes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>    </>
  );
}
