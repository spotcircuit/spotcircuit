'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

interface HvacHeroProps {
  onOpenForm: () => void;
}

const HvacHero: React.FC<HvacHeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative overflow-hidden bg-blue-900 text-white">
      {/* Background video/image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/static/images/hvac-technician-bg.png"
          alt="HVAC Technician with tablet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="rgba(255, 255, 255, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                HVAC Business Automation Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Book <span className="text-orange-400">3 More HVAC Jobs</span> Weekly Without Adding Staff
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              AI-Powered Scheduling & Client Management That Works While You Sleep
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={onOpenForm}
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                See If Your Business Qualifies
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-800 overflow-hidden">
                    <Image
                      src={`/static/images/hvac-owner-${i}.png`}
                      alt="HVAC Business Owner"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="ml-4 text-blue-100">
                <span className="font-semibold">Trusted by 200+ HVAC businesses nationwide</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-blue-700/30">
              <Image
                src="/static/images/hvac-dashboard.png"
                alt="HVAC Business Automation Dashboard"
                fill
                className="object-cover"
              />
              
              {/* Overlay notification animations */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[220px]"
              >
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold text-sm">New Appointment Booked</p>
                    <p className="text-blue-700 text-xs mt-1">AC Maintenance - Johnson Residence</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[220px]"
              >
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-3">
                    <FaCalendarAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold text-sm">Today's Schedule</p>
                    <p className="text-blue-700 text-xs mt-1">8 appointments optimized for minimal drive time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HvacHero;
