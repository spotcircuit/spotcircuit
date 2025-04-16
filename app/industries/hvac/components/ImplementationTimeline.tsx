'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPlug, FaUserCog, FaVial, FaRocket } from 'react-icons/fa';

const ImplementationTimeline = () => {
  const steps = [
    {
      title: "Integration Setup",
      days: "Day 1-2",
      description: "We connect our platform to your existing systems and import your customer data securely.",
      icon: <FaPlug className="text-blue-500 text-3xl" />,
      color: "blue"
    },
    {
      title: "Staff Training",
      days: "Day 3-5",
      description: "Your team gets up to speed with just 2 hours of total training, spread across short sessions.",
      icon: <FaUserCog className="text-green-500 text-3xl" />,
      color: "green"
    },
    {
      title: "System Testing",
      days: "Day 6-7",
      description: "We run comprehensive tests to ensure everything works flawlessly with your business processes.",
      icon: <FaVial className="text-purple-500 text-3xl" />,
      color: "purple"
    },
    {
      title: "Full Deployment",
      days: "Day 8-10",
      description: "Your automated system goes live, with our team monitoring closely to ensure smooth operations.",
      icon: <FaRocket className="text-orange-500 text-3xl" />,
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Up & Running in 10 Days or Less
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined implementation process gets you results fast, with zero disruption to your existing jobs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-white border-4 border-blue-500 transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-100">
                    <div className={`text-${step.color}-500 font-semibold mb-2`}>
                      {step.days}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full">
            Zero Disruption to Existing Jobs
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;
