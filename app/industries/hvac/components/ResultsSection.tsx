'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChartLine, FaTruck, FaDollarSign } from 'react-icons/fa';

const ResultsSection = () => {
  const caseStudies = [
    {
      title: "37% More Jobs Booked",
      description: "Family-owned HVAC business in Virginia saw a 37% increase in booked appointments within 60 days of implementation.",
      icon: <FaChartLine className="text-green-500 text-3xl" />,
      client: {
        name: "Robert Johnson",
        business: "Johnson Heating & Cooling",
        location: "Richmond, VA",
        image: "/static/images/hvac-owner-1.png"
      },
      stats: {
        before: "43 jobs/month",
        after: "59 jobs/month",
        improvement: "+37%"
      }
    },
    {
      title: "Expanded to 3 Trucks",
      description: "Solo HVAC technician was able to scale to 3 trucks without hiring any administrative staff to handle scheduling.",
      icon: <FaTruck className="text-blue-500 text-3xl" />,
      client: {
        name: "Michael Torres",
        business: "Torres HVAC Services",
        location: "Phoenix, AZ",
        image: "/static/images/hvac-owner-2.png"
      },
      stats: {
        before: "1 truck",
        after: "3 trucks",
        improvement: "200% growth"
      }
    },
    {
      title: "$45,000 Annual Savings",
      description: "Mid-sized HVAC company eliminated $45,000 in annual office staff costs while improving customer response times.",
      icon: <FaDollarSign className="text-purple-500 text-3xl" />,
      client: {
        name: "David Wilson",
        business: "Comfort Air Systems",
        location: "Dallas, TX",
        image: "/static/images/hvac-owner-3.png"
      },
      stats: {
        before: "$45K office costs",
        after: "Fully automated",
        improvement: "100% savings"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Possible When Your Business Runs Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't hypothetical results. They're real outcomes from HVAC businesses just like yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                    {study.icon}
                  </div>
                  
                  {/* Results badge */}
                  <div className="bg-green-100 text-green-800 font-bold text-sm px-3 py-1 rounded-full">
                    {study.stats.improvement}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                
                {/* Before/After stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded p-3 text-center">
                    <p className="text-gray-500 text-xs uppercase font-semibold">Before</p>
                    <p className="text-gray-800 font-bold">{study.stats.before}</p>
                  </div>
                  <div className="bg-blue-50 rounded p-3 text-center">
                    <p className="text-blue-500 text-xs uppercase font-semibold">After</p>
                    <p className="text-blue-800 font-bold">{study.stats.after}</p>
                  </div>
                </div>
                
                {/* Client info */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={study.client.image}
                      alt={study.client.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">{study.client.name}</p>
                    <p className="text-gray-600 text-sm">{study.client.business}</p>
                    <p className="text-gray-500 text-xs">{study.client.location}</p>
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

export default ResultsSection;
