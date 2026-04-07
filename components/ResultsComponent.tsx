'use client';

import { motion } from 'framer-motion';
import { TrophyIcon } from '@heroicons/react/24/outline';

interface Result {
  metric: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ResultsProps {
  title: string;
  subtitle?: string;
  results: Result[];
  columns?: 3 | 4;
  className?: string;
}

export function Results({ 
  title, 
  subtitle, 
  results, 
  columns = 4,
  className = '' 
}: ResultsProps) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4';

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

        <div className={`grid ${gridCols} gap-8`}>
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {result.icon && (
                <div className="mb-4 flex justify-center">
                  {result.icon}
                </div>
              )}
              
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {result.metric}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {result.label}
              </h3>
              
              {result.description && (
                <p className="text-gray-400 text-sm">
                  {result.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Also export as Results for compatibility
export { Results as default };