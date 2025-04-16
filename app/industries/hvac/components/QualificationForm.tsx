'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUserTie, FaBuilding, FaPhone, FaEnvelope, FaTruck, FaCalendarAlt, FaSpinner, FaCheck } from 'react-icons/fa';

interface QualificationFormProps {
  onClose: () => void;
}

const QualificationForm: React.FC<QualificationFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    trucks: '1-3',
    callVolume: 'low',
    currentSoftware: '',
    hearAbout: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <FaTimes className="text-xl" />
          </button>
          
          {/* Form header */}
          <div className="bg-blue-900 text-white p-6">
            <h3 className="text-2xl font-bold">See If Your HVAC Business Qualifies</h3>
            <p className="text-blue-100 mt-2">
              Complete this quick form to check availability in your area
            </p>
            
            {/* Progress indicator */}
            {!isSubmitted && (
              <div className="mt-4 flex items-center">
                <div className="w-full bg-blue-800 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-blue-100">Step {step}/3</span>
              </div>
            )}
          </div>
          
          {/* Form content */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thanks for Your Interest!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your application has been received. One of our HVAC automation specialists will contact you within 1 business day to discuss next steps.
                </p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUserTie className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBuilding className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Smith HVAC Services"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="john@smithhvac.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        How many service trucks do you operate?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaTruck className="text-gray-400" />
                        </div>
                        <select
                          name="trucks"
                          value={formData.trucks}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                          required
                        >
                          <option value="1-3">1-3 trucks</option>
                          <option value="4-10">4-10 trucks</option>
                          <option value="11-20">11-20 trucks</option>
                          <option value="21+">21+ trucks</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        What's your average monthly call volume?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <select
                          name="callVolume"
                          value={formData.callVolume}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                          required
                        >
                          <option value="low">Less than 50 calls</option>
                          <option value="medium">50-150 calls</option>
                          <option value="high">151-300 calls</option>
                          <option value="very-high">300+ calls</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        What software are you currently using?
                      </label>
                      <input
                        type="text"
                        name="currentSoftware"
                        value={formData.currentSoftware}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., ServiceTitan, Housecall Pro, etc."
                      />
                    </div>
                    
                    <div className="pt-4 flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        How did you hear about us?
                      </label>
                      <input
                        type="text"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Google, Referral, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        When would you like to schedule your business assessment?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <select
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select a time...</option>
                          <option value="tomorrow-morning">Tomorrow Morning</option>
                          <option value="tomorrow-afternoon">Tomorrow Afternoon</option>
                          <option value="this-week">Later This Week</option>
                          <option value="next-week">Next Week</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QualificationForm;
