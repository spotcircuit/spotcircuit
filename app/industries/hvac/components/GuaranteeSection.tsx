'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';

interface GuaranteeSectionProps {
  onOpenForm: () => void;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenForm }) => {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="guarantee-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0h40" fill="none" stroke="rgba(255, 255, 255, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guarantee-grid)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 opacity-20 transform skew-x-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <FaShieldAlt className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Promise to You
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/20 shadow-xl"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Book 25% More Appointments in 60 Days
              <span className="block text-orange-400 mt-2">
                or Your Implementation Fee is Refunded
              </span>
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're so confident in our platform that we guarantee results. If you don't see at least a 25% increase in booked appointments within 60 days, we'll refund your entire implementation fee—no questions asked.
            </p>
            
            <button
              onClick={onOpenForm}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <FaCalendarAlt className="mr-2" />
              Schedule Your Business Assessment
            </button>
            
            <div className="mt-8 text-blue-200 text-sm">
              <p>* Guarantee applies to businesses with at least 6 months of operational history</p>
            </div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {['Trusted by 200+ HVAC Companies', '4.9/5 Customer Rating', 'Industry-Leading Support'].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <p className="text-blue-100">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
