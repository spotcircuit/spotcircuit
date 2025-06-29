'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  title: string
  description: string
  icon: string
}

interface ProcessProps {
  title: string
  subtitle?: string
  steps: ProcessStep[]
  className?: string
}

export function Process({ title, subtitle, steps, className = '' }: ProcessProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Step Number */}
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2 bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Connector Lines */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            {steps.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-0.5 h-8 ${index === 0 ? 'opacity-0' : 'bg-gradient-to-b from-blue-500 to-purple-500'}`} />
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}