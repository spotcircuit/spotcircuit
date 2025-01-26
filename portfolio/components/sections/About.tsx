'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="rounded-3xl bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-4 sm:p-6 lg:p-8 h-full ring-1 ring-gray-900/10 dark:ring-white/10">
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">About Me</h2>
            <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
              E-commerce and SEO/AEO expert with a proven track record of scaling online businesses through AI-driven automation. 
              Founder of multiple successful ventures including SpotCircuit and SpotAI, specializing in Shopify optimization and 
              marketplace automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">E-commerce & Shopify Expertise</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Mastery in Shopify platform optimization, custom theme development, and e-commerce automation. Specialized in 
              creating scalable solutions that drive traffic, increase conversions, and optimize product listings across multiple 
              marketplaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">SEO/AEO Mastery</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Expert in AI-driven SEO/AEO optimization, leveraging cutting-edge AI technologies to automate content generation, 
              optimize product descriptions, and enhance search visibility. Proven success in improving organic rankings and 
              driving qualified traffic to e-commerce platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">AI Automation Innovation</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Pioneer in developing AI-powered automation solutions for e-commerce. Created innovative platforms that streamline 
              operations, automate content creation, and optimize marketplace listings. Expertise in integrating multiple AI models 
              for maximum efficiency and scalability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Entrepreneurial Success</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Founded and scaled multiple successful tech ventures in the e-commerce space. Built and manage a portfolio of 
              AI-driven platforms including SpotCircuit, SpotCircuitOffers, SpotAI, and SpotAIOffers, serving clients across 
              various e-commerce marketplaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Technical Innovation</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Developed cutting-edge AI-powered solutions that revolutionize e-commerce operations. Created proprietary algorithms 
              for automated product optimization, market analysis, and competitive intelligence. Expertise in integrating 
              large language models with e-commerce platforms for enhanced automation and scalability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Marketplace Expertise</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Deep understanding of major e-commerce marketplaces including Amazon, Shopify, BigCommerce, and WooCommerce. 
              Specialized in cross-platform optimization, inventory management, and automated listing creation. Developed 
              strategies for maximizing visibility and sales across multiple channels simultaneously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Growth Strategy</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Proven track record of scaling e-commerce businesses through data-driven strategies and AI automation. 
              Expertise in conversion rate optimization, customer journey optimization, and revenue growth strategies. 
              Successfully helped clients achieve significant ROI improvements through automated optimization techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Research & Development</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Actively involved in researching and implementing emerging AI technologies in e-commerce. Focused on developing 
              novel approaches to product optimization, market analysis, and automated decision-making. Regular contributor to 
              the e-commerce technology community through innovations in AI-driven automation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
