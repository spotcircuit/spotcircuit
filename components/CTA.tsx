'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

interface CTAButton {
  text: string
  href: string
}

interface CTAProps {
  title: string
  description?: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  className?: string
}

export function CTA({ title, description, primaryCTA, secondaryCTA, className = '' }: CTAProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            
            {description && (
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryCTA.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {primaryCTA.text}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.span>
              </Link>

              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    {secondaryCTA.text}
                  </motion.span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}