'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'AI-Powered Product Descriptions',
    description: 'Our advanced AI technology generates unique, SEO-optimized product descriptions that convert. Say goodbye to generic content and hello to descriptions that rank and sell.',
    features: [
      'Unique content for every product',
      'Keyword-optimized automatically',
      'Conversion-focused copy',
      'Brand voice consistency',
      'Bulk generation capability'
    ]
  },
  {
    name: 'Smart Category Optimization',
    description: "Maximize your category pages' visibility with intelligent optimization. We analyze search intent and competition to structure your categories for maximum impact.",
    features: [
      'Category structure analysis',
      'Search intent mapping',
      'Competitive gap analysis',
      'Internal linking strategy',
      'Category meta optimization'
    ]
  },
  {
    name: 'Technical SEO Automation',
    description: 'Automatically identify and fix technical SEO issues before they impact your rankings. Our system monitors and optimizes your store 24/7.',
    features: [
      'Automated site audits',
      'Schema markup generation',
      'Mobile optimization',
      'Site speed optimization',
      'XML sitemap management'
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-green-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to scale your Shopify store's SEO
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Leverage the power of AI to automate and optimize your store's SEO. Our comprehensive suite of tools handles everything from product descriptions to technical optimization.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {services.map((service, serviceIdx) => (
              <div key={service.name} className="relative bg-white shadow-lg rounded-2xl p-8 ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold">
                  {serviceIdx + 1}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                        <span className="text-sm leading-6 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="#book-demo"
              className="rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              Get Started with AI-Powered SEO
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
