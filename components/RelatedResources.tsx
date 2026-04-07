'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export interface ResourceItem {
  title: string;
  description: string;
  href: string;
  color: string;
  ctaText: string;
}

interface RelatedResourcesProps {
  resources: ResourceItem[];
  title?: string;
  className?: string;
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ 
  resources, 
  title = "Related Resources",
  className = ""
}) => {
  // Function to get the appropriate text color class based on the color prop
  const getTextColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-400';
      case 'green': return 'text-green-400';
      case 'purple': return 'text-purple-400';
      case 'yellow': return 'text-yellow-400';
      case 'red': return 'text-red-400';
      case 'teal': return 'text-teal-400';
      default: return 'text-blue-400';
    }
  };

  // Function to get the appropriate CTA text color class based on the color prop
  const getCtaColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'purple': return 'text-purple-500';
      case 'yellow': return 'text-yellow-500';
      case 'red': return 'text-red-500';
      case 'teal': return 'text-teal-500';
      default: return 'text-blue-500';
    }
  };

  return (
    <div className={`bg-gray-900 rounded-xl p-8 ${className}`}>
      <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={resource.href} className="block p-6 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-colors h-full">
              <h4 className={`font-bold ${getTextColorClass(resource.color)} mb-2`}>{resource.title}</h4>
              <p className="text-sm text-gray-300 mb-3">{resource.description}</p>
              <span className={`text-xs ${getCtaColorClass(resource.color)} mt-2 inline-flex items-center`}>
                {resource.ctaText} <FaArrowRight className="ml-1 text-[10px]" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedResources;