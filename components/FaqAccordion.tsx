'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  structuredData?: boolean;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services.",
  faqs,
  structuredData = true
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate structured data for SEO
  const generateStructuredData = () => {
    if (!structuredData) return null;
    
    const structuredDataObj = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataObj) }}
      />
    );
  };

  return (
    <section id="faq" className="py-16 px-4 bg-white overflow-hidden relative">
      {structuredData && generateStructuredData()}
      
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            {title.includes('<span') ? (
              <div dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              <>
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="gradient-text">{title.split(' ').slice(-1)}</span>
              </>
            )}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <div 
                onClick={() => toggleAccordion(index)}
                className={`bg-white p-5 rounded-xl border ${
                  openIndex === index 
                    ? 'border-blue-300 shadow-lg shadow-blue-100' 
                    : 'border-gray-200 shadow-sm hover:border-blue-200'
                } transition-all duration-300 cursor-pointer`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-1 rounded-full ${
                      openIndex === index 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-500'
                    } transition-colors duration-300`}
                  >
                    <FaChevronDown className="h-4 w-4" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
