"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaBookOpen, 
  FaMapMarkerAlt, 
  FaBrain, 
  FaChartLine, 
  FaArrowRight, 
  FaSearch,
  FaTools,
  FaCode,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

// Define the types for resource cards
interface ResourceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  category: string;
  isNew?: boolean;
}

const ResourcesPage: React.FC = () => {
  // Resource cards data
  const resources: ResourceCard[] = [
    {
      title: "AI Search Optimization Guide",
      description: "Master the strategies to get your content cited by ChatGPT, Claude, and Perplexity",
      icon: <FaBrain className="text-blue-500" />,
      image: "/static/images/ai-seo-guide-card.jpg",
      link: "/resources/ai-search-optimization",
      category: "AI & SEO",
      isNew: true
    },
    {
      title: "Local SEO Guide for Service Businesses",
      description: "Dominate local search results and Google Maps with proven local optimization techniques",
      icon: <FaMapMarkerAlt className="text-green-500" />,
      image: "/static/images/local-seo-guide-card.jpg",
      link: "/resources/local-seo-guide",
      category: "Local SEO"
    },
    {
      title: "Technical SEO Audit Checklist",
      description: "Comprehensive checklist to identify and fix technical SEO issues on your website",
      icon: <FaCode className="text-purple-500" />,
      image: "/static/images/tech-seo-card.jpg",
      link: "/resources/technical-seo-checklist",
      category: "Technical SEO",
      isNew: true
    },
    {
      title: "Content Strategy Blueprint",
      description: "Create content that ranks in search engines and converts visitors into customers",
      icon: <FaBookOpen className="text-yellow-500" />,
      image: "/static/images/content-strategy-card.jpg",
      link: "/resources/content-strategy-blueprint",
      category: "Content Marketing"
    },
    {
      title: "Analytics & Conversion Guide",
      description: "Set up proper tracking and optimize your website for maximum conversions",
      icon: <FaChartLine className="text-red-500" />,
      image: "/static/images/analytics-guide-card.jpg",
      link: "/resources/analytics-conversion-guide",
      category: "Analytics"
    },
    {
      title: "AI Marketing Tools Directory",
      description: "Explore our curated collection of AI tools to enhance your marketing efforts",
      icon: <FaTools className="text-indigo-500" />,
      image: "/static/images/ai-tools-card.jpg",
      link: "/resources/ai-marketing-tools",
      category: "AI Tools"
    }
  ];

  // Filter categories for the filter buttons
  const categories = Array.from(new Set(resources.map(resource => resource.category)));

  // State for filtered resources
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Filter resources based on category and search term
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory ? resource.category === activeCategory : true;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Schema markup for Resource page */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Marketing Resources & Guides",
            "description": "Free marketing resources, guides, and tools for improving your SEO, content strategy, and digital marketing results.",
            "url": "https://www.spotcircuit.com/resources",
            "provider": {
              "@type": "Organization",
              "name": "SpotCircuit",
              "url": "https://www.spotcircuit.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Digital Marketing Resources"
            }
          })
        }}
      />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-900 to-black py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Free Marketing <span className="text-blue-400">Resources</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive guides, templates, and tools to help you improve your SEO, content strategy, and digital marketing results
              </motion.p>
              
              <motion.div 
                className="relative max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                className={`px-5 py-2 rounded-full transition-colors ${activeCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                onClick={() => setActiveCategory(null)}
              >
                All Resources
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full transition-colors ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-gray-900/80 rounded-full px-3 py-1 text-sm">
                      {resource.category}
                    </div>
                    
                    {resource.isNew && (
                      <div className="absolute top-4 right-4 bg-blue-600 rounded-full px-3 py-1 text-xs font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gray-800 rounded-full mr-3">
                        {resource.icon}
                      </div>
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{resource.description}</p>
                    
                    <Link href={resource.link}>
                      <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        View Resource <FaArrowRight className="ml-2" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredResources.length === 0 && (
              <div className="text-center py-16">
                <FaSearch className="text-5xl text-gray-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No resources found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
                <button 
                  className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get New Resources in Your Inbox</h2>
              <p className="text-gray-300 mb-8">Subscribe to our newsletter and be the first to receive our latest guides, templates, and tools.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
        
        {/* Custom Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Need Custom Resources?</h2>
                  <p className="text-gray-300 mb-6">
                    We can develop personalized strategies and resources tailored specifically to your business goals and challenges.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mt-1 mr-3" />
                      <p className="text-gray-300">Personalized marketing strategy documents</p>
                    </div>
                    <div className="flex items-start">
                      <FaChartLine className="text-green-500 mt-1 mr-3" />
                      <p className="text-gray-300">Custom analytics dashboards and reporting</p>
                    </div>
                    <div className="flex items-start">
                      <FaSearch className="text-blue-500 mt-1 mr-3" />
                      <p className="text-gray-300">Industry-specific SEO and content plans</p>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                      Contact Us
                    </span>
                  </Link>
                </div>
                
                <div className="md:w-1/2">
                  <Image
                    src="/static/images/custom-resources.jpg"
                    alt="Custom marketing resources"
                    width={500}
                    height={350}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;