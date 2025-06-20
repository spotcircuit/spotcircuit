"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaClock, 
  FaUserClock, 
  FaChartLine, 
  FaPhoneAlt,
  FaArrowRight,
  FaSnowflake,
  FaCalendarCheck,
  FaUsers,
  FaLaptop,
  FaMobileAlt,
  FaHeadset
} from 'react-icons/fa';
import { HiOutlineClock, HiOutlineChartBar, HiOutlineTrendingUp } from 'react-icons/hi';

// Components
import HvacHero from '@/app/industries/hvac/components/HvacHero';
import PainPoints from '@/app/industries/hvac/components/PainPoints';
import SolutionOverview from '@/app/industries/hvac/components/SolutionOverview';
import ImplementationTimeline from '@/app/industries/hvac/components/ImplementationTimeline';
import ResultsSection from '@/app/industries/hvac/components/ResultsSection';
import GuaranteeSection from '@/app/industries/hvac/components/GuaranteeSection';
import PricingSection from '@/app/industries/hvac/components/PricingSection';
import QualificationForm from '@/app/industries/hvac/components/QualificationForm';
import HvacPageSchema from '@/app/industries/hvac/components/HvacPageSchema';

const HVACLandingPage = () => {
  const [showQualificationForm, setShowQualificationForm] = useState(false);

  const toggleQualificationForm = () => {
    setShowQualificationForm(!showQualificationForm);
  };

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Will this work with my existing software?",
      answer: "Yes, our platform is designed to integrate with most popular HVAC business management software including ServiceTitan, Housecall Pro, and FieldEdge. We also offer custom API integrations for proprietary systems. Our team handles the entire integration process during implementation."
    },
    {
      question: "How much time will implementation take?",
      answer: "Our streamlined implementation process takes just 10 days or less, with minimal disruption to your existing operations. The actual time commitment required from your team is only about 2 hours total, spread across a few short training sessions."
    },
    {
      question: "What if my technicians aren't tech-savvy?",
      answer: "Our platform is designed with simplicity in mind. The technician mobile app requires minimal training and has an intuitive interface that even the most tech-resistant team members can master quickly. We also provide personalized training and 24/7 support to ensure everyone is comfortable with the system."
    },
    {
      question: "Can it handle emergency scheduling?",
      answer: "Absolutely! Emergency scheduling is one of our platform's core strengths. The system automatically prioritizes emergency calls, finds the nearest available technician, and provides real-time updates to both your office and the customer. This reduces response times by an average of 37%."
    },
    {
      question: "What happens after the 90-day support period?",
      answer: "After the initial 90-day priority support period, you'll transition to our standard support package, which includes email and chat support during business hours, plus access to our knowledge base and video tutorials. Premium support packages with 24/7 phone support are also available for an additional fee."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We take data security extremely seriously. Our platform uses enterprise-grade encryption, secure cloud storage, and regular security audits. We're fully GDPR compliant and never share your customer data with third parties. All customer information is backed up daily and protected by advanced threat monitoring systems."
    },
    {
      question: "Can I customize the booking process for different services?",
      answer: "Yes, the platform allows you to create custom booking workflows for different service types. You can set specific questions, required fields, and even seasonal prompts for services like AC tune-ups in summer or heating maintenance in winter. This customization helps capture all necessary information upfront, reducing follow-up calls."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Schema Markup */}
      <HvacPageSchema />
      
      {/* Floating Scheduling Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleQualificationForm}
          className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FaCalendarAlt className="text-xl" />
          <span>Schedule Now</span>
        </button>
      </div>

      {/* Qualification Form Modal */}
      {showQualificationForm && (
        <QualificationForm onClose={toggleQualificationForm} />
      )}

      <main>
        {/* Hero Section */}
        <HvacHero onOpenForm={toggleQualificationForm} />
        
        {/* Pain Points Section */}
        <PainPoints />
        
        {/* Solution Overview */}
        <SolutionOverview />
        
        {/* Implementation Timeline */}
        <ImplementationTimeline />
        
        {/* Results Section */}
        <ResultsSection />
        
        {/* Guarantee Section */}
        <GuaranteeSection onOpenForm={toggleQualificationForm} />
        
        {/* Pricing Section */}
        <PricingSection onOpenForm={toggleQualificationForm} />
        
        {/* FAQ Section */}
        <FaqAccordion 
          title="Common Questions About Our HVAC Automation"
          subtitle="Get answers to the most frequently asked questions about our platform and implementation process."
          faqs={faqItems}
        />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Stop Losing Jobs to Faster Competitors
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl mb-10 text-blue-100"
              >
                HVAC businesses that automate respond <span className="font-bold">7x faster</span> to new leads
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button 
                  onClick={toggleQualificationForm}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  See If You Qualify
                </button>
                
                <p className="mt-4 text-sm text-blue-200">Limited to 5 new HVAC clients per month</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HVACLandingPage;
