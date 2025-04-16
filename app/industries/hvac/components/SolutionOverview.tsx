'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarCheck, FaRoute, FaBullhorn, FaQuoteLeft } from 'react-icons/fa';

const SolutionOverview = () => {
  const solutions = [
    {
      title: "24/7 Automated Booking",
      description: "Never miss another service call. Our AI booking system handles customer inquiries around the clock, instantly confirming appointments and sending all details to your dashboard.",
      icon: <FaCalendarCheck className="text-blue-500 text-4xl" />,
      testimonial: {
        text: "We've captured 27 emergency calls in the first month alone—calls we would have missed before.",
        author: "Mike Reynolds",
        position: "Reynolds Heating & Cooling"
      }
    },
    {
      title: "Smart Scheduling & Dispatching",
      description: "Maximize your technicians' time with AI-optimized routes and schedules. Automatically assign the right tech to each job based on skills, location, and availability.",
      icon: <FaRoute className="text-blue-500 text-4xl" />,
      testimonial: {
        text: "Our techs complete 2 more jobs per day with the optimized routing. That's pure profit.",
        author: "Sarah Martinez",
        position: "Comfort Zone HVAC"
      }
    },
    {
      title: "Seasonal Marketing Automation",
      description: "Stay top-of-mind with customers through automated maintenance reminders and seasonal promotions that drive repeat business and referrals.",
      icon: <FaBullhorn className="text-blue-500 text-4xl" />,
      testimonial: {
        text: "The seasonal campaigns generated $43K in tune-ups last fall—with zero effort from our team.",
        author: "David Wilson",
        position: "Wilson Air Systems"
      }
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Virtual HVAC Office Manager
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform handles the administrative burden so you can focus on growing your business and serving customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 mt-auto">
                  <div className="flex items-start">
                    <FaQuoteLeft className="text-blue-300 text-xl mt-1 mr-3" />
                    <div>
                      <p className="text-gray-700 italic text-sm">
                        "{solution.testimonial.text}"
                      </p>
                      <p className="text-gray-900 font-semibold text-sm mt-2">
                        {solution.testimonial.author}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {solution.testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default SolutionOverview;
