import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered SEO Optimization',
    description: 'Our advanced AI algorithms continuously analyze and optimize your store\'s content, meta tags, and structure for maximum search visibility.',
    icon: '/static/images/ai-optimization.svg'
  },
  {
    name: 'Real-Time Analytics',
    description: 'Get instant insights into your store\'s performance with comprehensive analytics tracking traffic, conversions, and user behavior.',
    icon: '/static/images/stats-card.svg'
  },
  {
    name: 'Competitor Analysis',
    description: 'Stay ahead of the competition with detailed insights into their strategies, keywords, and market positioning.',
    icon: '/static/images/market-share.svg'
  }
];

const includedFeatures = [
  'Comprehensive SEO Audit',
  'Keyword Research & Optimization',
  'Technical SEO Implementation',
  'Content Strategy Development',
  'Performance Monitoring',
  'Monthly Progress Reports',
  '24/7 Support',
  'ROI Tracking'
];

export default function Services() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-green-500"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Everything you need to succeed online
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Comprehensive SEO solutions powered by cutting-edge AI technology to drive more traffic and sales to your Shopify store.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-12 w-12 flex-none">
                    <Image
                      src={feature.icon}
                      alt={feature.name}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Included Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gray-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">All-Inclusive Package</h3>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Get everything you need to transform your Shopify store's online presence and drive sustainable growth.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-green-500">What's included</h4>
              <div className="h-px flex-auto bg-gray-700" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
