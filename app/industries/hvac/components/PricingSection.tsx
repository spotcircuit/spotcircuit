'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa';

interface PricingSectionProps {
  onOpenForm: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onOpenForm }) => {
  const features = [
    "Complete booking automation",
    "Custom HVAC service forms",
    "Technician mobile app",
    "Customer self-scheduling portal",
    "90 days priority support",
    "Unlimited users",
    "Seasonal campaign templates",
    "Performance analytics dashboard"
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees or long-term contracts. Just straightforward pricing that scales with your business.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Pricing details */}
              <div className="p-8 md:p-12 bg-blue-900 text-white">
                <h3 className="text-2xl font-bold mb-6">HVAC Automation Platform</h3>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-lg text-blue-200">One-time</span>
                    <span className="text-4xl font-bold ml-2">$1,997</span>
                  </div>
                  <p className="text-blue-200 mt-1">Implementation Fee</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-lg text-blue-200">Then only</span>
                    <span className="text-4xl font-bold ml-2">$297</span>
                    <span className="text-lg text-blue-200 ml-2">/month</span>
                  </div>
                  <p className="text-blue-200 mt-1">Only after system is live</p>
                </div>
                
                <div className="bg-blue-800/50 rounded-lg p-4 mb-8">
                  <p className="text-sm text-blue-100">
                    <strong>No long-term contracts required.</strong> Cancel anytime with 30 days notice. Your data always remains yours.
                  </p>
                </div>
                
                <button
                  onClick={onOpenForm}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Check Availability for Your Area
                </button>
                
                <p className="text-center text-blue-200 text-sm mt-4">
                  Limited to 5 new HVAC clients per month
                </p>
              </div>
              
              {/* Features list */}
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Everything You Need Included:</h3>
                
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <FaCheck className="text-green-600 text-sm" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Optional Add-ons:</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 text-sm">
                      • Premium 24/7 Support: +$99/month
                    </li>
                    <li className="text-gray-700 text-sm">
                      • Custom Integrations: Quote based on requirements
                    </li>
                    <li className="text-gray-700 text-sm">
                      • White-labeled Customer Portal: +$149/month
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Money-back guarantee badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full">
              60-Day Money-Back Guarantee
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
