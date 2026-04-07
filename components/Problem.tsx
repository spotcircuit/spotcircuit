'use client';

import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ProblemItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProblemProps {
  title: string;
  subtitle?: string;
  problems: ProblemItem[];
  className?: string;
}

export function Problem({ title, subtitle, problems, className = '' }: ProblemProps) {
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
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
                {problem.icon || <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {problem.title}
              </h3>
              
              <p className="text-gray-400">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export for backward compatibility
export default Problem;