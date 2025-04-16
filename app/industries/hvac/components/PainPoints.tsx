'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaClock, FaPhoneAlt, FaCalendarCheck, FaRunning } from 'react-icons/fa';

const PainPoints = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const painPoints = [
    {
      id: 0,
      title: "Customers calling after hours but no one's there to book the job",
      description: "Lost opportunities add up quickly. The average HVAC business misses 35% of after-hours calls that could convert to immediate service.",
      icon: <FaPhoneAlt className="text-red-500" />,
      image: "/static/images/hvac-missed-call.png"
    },
    {
      id: 1,
      title: "Spending 15+ hours weekly on scheduling and callbacks",
      description: "Administrative tasks eat into your profits. Most HVAC business owners spend nearly two full work days per week just managing their schedule.",
      icon: <FaClock className="text-red-500" />,
      image: "/static/images/hvac-scheduling.png"
    },
    {
      id: 2,
      title: "Forgetting to follow up on preventative maintenance appointments",
      description: "Recurring revenue opportunities slip through the cracks. The typical HVAC business loses $37,500 annually in missed maintenance renewals.",
      icon: <FaCalendarCheck className="text-red-500" />,
      image: "/static/images/hvac-maintenance.png"
    },
    {
      id: 3,
      title: "Losing jobs to competitors who respond faster",
      description: "Speed wins in HVAC service. 78% of customers choose the company that responds first, regardless of price differences.",
      icon: <FaRunning className="text-red-500" />,
      image: "/static/images/hvac-competition.png"
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
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HVAC business owners face these challenges every day. They're not just frustrating—they're costing you thousands in lost revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={painPoints[activeCard].image}
              alt={painPoints[activeCard].title}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center mb-3">
                <div className="bg-white rounded-full p-3 mr-3">
                  {painPoints[activeCard].icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {painPoints[activeCard].title}
                </h3>
              </div>
              <p className="text-white/90">
                {painPoints[activeCard].description}
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCard === index 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white hover:bg-blue-50 text-gray-700 shadow border border-gray-100'
                }`}
                onClick={() => setActiveCard(index)}
              >
                <div className="flex items-center">
                  <div className={`rounded-full p-3 mr-4 ${
                    activeCard === index ? 'bg-white' : 'bg-blue-100'
                  }`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold ${
                      activeCard === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {point.title}
                    </h3>
                    {activeCard === index && (
                      <p className="mt-2 text-blue-100 text-sm">
                        Click to learn more
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
