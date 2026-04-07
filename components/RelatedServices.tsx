'use client';

import Link from 'next/link';
import { 
  FaArrowRight,
  FaTools,
  FaSnowflake,
  FaBolt,
  FaHammer 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon }) => (
  <motion.div 
    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-start mb-4">
      <div className="bg-green-500/10 p-3 rounded-lg text-green-500">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <Link 
      href={href}
      className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
    >
      Learn more
      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

interface RelatedServicesProps {
  currentService: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentService }) => {
  const allServices = [
    {
      id: 'plumbing',
      title: 'Plumbing Services',
      description: '24/7 emergency plumbing solutions with rapid response times and transparent pricing.',
      icon: <FaTools className="w-6 h-6" />,
    },
    {
      id: 'hvac',
      title: 'HVAC Services',
      description: 'Heating, cooling, and air quality solutions for residential and commercial properties.',
      icon: <FaSnowflake className="w-6 h-6" />,
    },
    {
      id: 'electrical',
      title: 'Electrical Services',
      description: 'Certified electricians for installations, repairs, and electrical safety inspections.',
      icon: <FaBolt className="w-6 h-6" />,
    },
    {
      id: 'contractors',
      title: 'General Contracting',
      description: 'Full-service contracting for home renovations, remodels, and new construction.',
      icon: <FaHammer className="w-6 h-6" />,
    },
  ];

  // Filter out the current service
  const relatedServices = allServices.filter(service => service.id !== currentService);

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Other Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive solutions for all your home service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={`/local-marketing#${service.id}`}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/local-marketing" 
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
          >
            View All Services
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
