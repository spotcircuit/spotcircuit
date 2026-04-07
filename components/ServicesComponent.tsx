'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface Service {
  title: string;
  description: string;
  href: string;
  icon?: string | React.ReactNode;
  features?: string[];
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function Services({ 
  title = "Our Services", 
  subtitle,
  services, 
  columns = 2,
  className = '' 
}: ServicesProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-white mb-4"
              >
                {title}
              </motion.h2>
            )}
            
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
        )}

        <div className={`grid ${gridCols} gap-8`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group block h-full"
              >
                <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {service.icon && (
                    <div className="mb-4">
                      {typeof service.icon === 'string' ? (
                        <span className="text-4xl">{service.icon}</span>
                      ) : (
                        service.icon
                      )}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Also export as default for compatibility
export default Services;