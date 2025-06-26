'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Lazy load the PackageSchema component with proper client-side handling
// Using a more explicit path to resolve TypeScript module resolution issues
const PackageSchema = dynamic(
  () => import(/* webpackChunkName: "package-schema" */ '../local-services/components/PackageSchema').catch(() => {
    console.warn('Failed to load PackageSchema component');
    return () => null;
  }), {
    ssr: false,
    loading: () => <div className="hidden">Loading schema...</div>
  }
);

// Import LocalServicesPageSchema
import LocalServicesPageSchema from './components/LocalServicesPageSchema';
import { 
  FaTools, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaPhoneAlt,
  FaChartLine, 
  FaCalendarAlt, 
  FaThumbsUp, 
  FaUsers,
  FaWrench,
  FaHammer,
  FaBolt,
  FaSnowflake,
  FaSearch,
  FaMobileAlt,
  FaRobot,
  FaMoneyBillWave,
  FaCommentDots,
  FaFileAlt,
  FaHome,
  FaLeaf,
  FaGavel,
  FaStethoscope,
  FaArrowRight,
  FaClock
} from 'react-icons/fa';
import RelatedServices from '@/components/RelatedServices';

// Metadata moved to metadata.ts file

const LocalServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plumbing');
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle sticky CTA bar
  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-green-900/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Sticky CTA Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={isSticky ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 py-3 z-50 shadow-2xl"
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isSticky ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <FaTools className="text-green-500 text-xl mr-3" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            </div>
            <p className="text-sm md:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              Ready to transform your local service business?
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isSticky ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="#packages">
              <motion.span 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all duration-300 inline-flex items-center shadow-lg shadow-blue-900/30"
              >
                <FaFileAlt className="mr-2" />
                View Packages
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all duration-300 inline-flex items-center shadow-lg shadow-green-900/30"
              >
                <FaCommentDots className="mr-2" />
                Free Consultation
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-blue-500/5 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 -right-40 w-[1000px] h-[1000px] bg-green-500/5 rounded-full filter blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                AI-Powered Growth for Local Businesses
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">Dominate</span> Your Local Market with AI-Powered Marketing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized for <Link href="/local-services#plumbing" className="text-green-400 hover:text-green-300 font-medium transition-colors">plumbers</Link>, <Link href="/local-services#hvac" className="text-green-400 hover:text-green-300 font-medium transition-colors">HVAC pros</Link>, <Link href="/local-services#electrical" className="text-green-400 hover:text-green-300 font-medium transition-colors">electricians</Link>, and <Link href="/local-services#contractors" className="text-green-400 hover:text-green-300 font-medium transition-colors">contractors</Link>. 
                Fill your schedule with high-quality jobs while you focus on what you do best.
              </p>
              
              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  { value: "77%", label: "More Leads", icon: <FaChartLine className="text-2xl text-green-400" /> },
                  { value: "3X", label: "Visibility", icon: <FaSearch className="text-2xl text-blue-400" /> },
                  { value: "12+ hrs", label: "Time Saved/Week", icon: <FaClock className="text-2xl text-purple-400" /> }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-green-500/30 transition-colors"
                    variants={fadeInUp}
                  >
                    <div className="mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact" className="block">
                  <motion.span 
                    className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/20 text-center w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Your Free Local Audit
                    <FaArrowRight className="ml-2 text-sm" />
                  </motion.span>
                </Link>
                <Link href="#packages" className="block">
                  <motion.span 
                    className="inline-flex items-center justify-center bg-gray-800/50 hover:bg-gray-800/80 text-white font-medium py-4 px-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Service Packages
                  </motion.span>
                </Link>
              </motion.div>
              
              {/* Trust Badges */}
              <motion.div 
                className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-8 pt-6 border-t border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 border-2 border-gray-900"></div>
                    ))}
                  </div>
                  <span>Trusted by 500+ local businesses</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 mr-2">
                    <FaStar className="text-sm" />
                  </div>
                  <span>4.9/5 from 287 reviews</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Dashboard Image */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, y: 50, rotateY: 5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full h-full min-h-[600px]">
                {/* Main Dashboard Image */}
                <motion.div 
                  className="bg-gradient-to-br from-blue-900/30 via-green-900/30 to-purple-900/30 rounded-3xl p-1.5 shadow-2xl w-full h-full"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 w-full h-full flex items-start justify-center p-4">
                    <img 
                      src="/static/images/local-service-dashboard.png" 
                      alt="SpotCircuit Local Service Dashboard" 
                      className="w-auto h-full max-w-full object-contain rounded-lg shadow-lg"
                      style={{ maxHeight: '800px' }}
                    />
                    
                    {/* Animated Overlay Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Pulsing indicator */}
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      
                      {/* Animated connection lines */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                          d="M30% 40 Q 50% 20, 70% 40" 
                          stroke="#3B82F6" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle 
                          cx="30%" 
                          cy="40%" 
                          r="4" 
                          fill="#3B82F6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating Badges */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full shadow-xl flex items-center z-10"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  whileHover={{ y: -5 }}
                >
                  <FaSearch className="mr-2" />
                  Local SEO Technology
                </motion.div>
                
                <motion.div 
                  className="absolute -top-4 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium py-2 px-4 rounded-full shadow-xl flex items-center z-10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  whileHover={{ y: -5 }}
                >
                  <FaRobot className="mr-2" />
                  AI-Powered Analytics
                </motion.div>
                
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute -right-4 top-1/3 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 shadow-2xl w-48"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  whileHover={{ rotate: 2 }}
                >
                  <div className="text-green-400 font-bold text-sm mb-2">Monthly Performance</div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">37 new calls</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm">138 map views</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm">8 new reviews</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -z-10">
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-70"></div>
          
          {/* Floating blob elements */}
          <div className="absolute -left-40 -top-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-float-slow">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,71.5,41.9C61.6,54.7,47.5,65.5,32.2,72.4C16.9,79.2,0.4,82.1,-14.4,79.8C-29.1,77.5,-42.1,69.9,-52.5,58.7C-62.9,47.5,-70.7,32.7,-75.3,16.1C-79.9,-0.5,-81.3,-18.9,-74.7,-33.3C-68.1,-47.7,-53.5,-58.1,-39.6,-65.3C-25.7,-72.5,-12.6,-76.6,1.1,-78.5C14.8,-80.4,29.6,-80.1,44.7,-76.4Z" transform="translate(100 100)" className="text-blue-500/10" />
            </svg>
          </div>
          
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-float-medium">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,71.5,41.9C61.6,54.7,47.5,65.5,32.2,72.4C16.9,79.2,0.4,82.1,-14.4,79.8C-29.1,77.5,-42.1,69.9,-52.5,58.7C-62.9,47.5,-70.7,32.7,-75.3,16.1C-79.9,-0.5,-81.3,-18.9,-74.7,-33.3C-68.1,-47.7,-53.5,-58.1,-39.6,-65.3C-25.7,-72.5,-12.6,-76.6,1.1,-78.5C14.8,-80.4,29.6,-80.1,44.7,-76.4Z" transform="translate(100 100) scale(-1) rotate(45)" className="text-green-500/10" />
            </svg>
          </div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-red-900/20 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-red-500/30">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Common Challenges We Solve
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Challenges Facing Local Service Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you're struggling with these common problems, our AI-powered solutions can transform your business
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Pain Point 1 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/5 rounded-full group-hover:bg-red-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-red-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-red-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all duration-300 border border-red-500/20 group-hover:border-red-500/50">
                    <svg className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  Invisible in Local Search
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your competitors dominate Google Maps and local searches, making it nearly impossible for customers to find you online.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Pain Point 2 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-blue-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20 group-hover:border-blue-500/50">
                    <svg className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.36265L7.96701 10.3615C9.06925 12.7974 11.2026 14.9307 13.6385 16.033L14.6374 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z" fill="currentColor" />
                      <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  Not Enough Quality Leads
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your schedule has gaps, or you're working with low-value customers because you're not attracting the right leads consistently.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Pain Point 3 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/5 rounded-full group-hover:bg-purple-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-purple-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 group-hover:border-purple-500/50">
                    <svg className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 13H7.01M12 13H12.01M17 13H17.01M7 17H7.01M12 17H12.01M17 17H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                  Inconsistent Scheduling
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  You're either overwhelmed with too many jobs at once or struggling with last-minute cancellations and no-shows.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Pain Point 4 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/5 rounded-full group-hover:bg-green-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-green-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-green-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-all duration-300 border border-green-500/20 group-hover:border-green-500/50">
                    <svg className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 15H19.01M19 9H19.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  High Customer Acquisition Costs
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  You're spending too much on ads that don't convert, with no clear way to track which marketing efforts are actually working.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Pain Point 5 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/5 rounded-full group-hover:bg-yellow-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-yellow-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-all duration-300 border border-yellow-500/20 group-hover:border-yellow-500/50">
                    <svg className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8V12L15 15M12 3C16.4183 3 20 6.58172 20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 1V1.01M23 12H22.99M12 22.99V23M1 12H1.01M3.6 3.6L4.36 4.36M19.4 3.6L20.16 4.36M20.16 19.4L19.4 20.16M4.36 19.4L3.6 20.16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  Outdated Technology
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  You're still using spreadsheets and paper forms, wasting time on administrative tasks instead of focusing on growing your business.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Pain Point 6 */}
            <motion.div 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/5 rounded-full group-hover:bg-pink-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-pink-500/10 rounded-full filter blur-xl group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative bg-pink-900/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-all duration-300 border border-pink-500/20 group-hover:border-pink-500/50">
                    <svg className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 2L19 4L17 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">
                  Negative Reviews Impacting Growth
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A few bad reviews are hurting your online reputation, making it harder to attract new customers and grow your business.
                </p>
                <Link 
                  href="#solutions" 
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300 group/button"
                >
                  <span className="relative">
                    How we fix this
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover/button:w-full transition-all duration-300"></span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/resources/local-seo-guide">
              <span className="bg-blue-900/30 hover:bg-blue-900/50 text-white font-medium py-3 px-6 rounded-lg border border-blue-800 transition duration-300 inline-flex items-center">
                <FaFileAlt className="mr-2 text-blue-400" />
                Read our Free Guide: Overcoming Local Service Marketing Challenges
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Custom-built for local service businesses to solve your biggest marketing challenges
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solution 1 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-green-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-green-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaSearch className="text-2xl text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Local SEO Domination
              </h3>
              <p className="text-gray-300 mb-4">
                Our AI technology optimizes your Google Business Profile and local search presence to make you the top choice in your service area.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Google Maps optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Location-specific content</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Competitor analysis</span>
                </li>
              </ul>
              <Link href="/services#local-seo">
                <span className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Solution 2 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaRobot className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                AI Lead Generation
              </h3>
              <p className="text-gray-300 mb-4">
                Automated systems that attract, qualify, and nurture high-quality leads so you only spend time on customers ready to buy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">24/7 lead qualification</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated follow-up</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Smart scheduling</span>
                </li>
              </ul>
              <Link href="/services#lead-generation">
                <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Solution 3 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-purple-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-purple-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaStar className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Reputation Management
              </h3>
              <p className="text-gray-300 mb-4">
                Automatically collect and showcase positive reviews while promptly addressing negative feedback to build a stellar online reputation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Review solicitation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Response management</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Reputation monitoring</span>
                </li>
              </ul>
              <Link href="/services#reputation">
                <span className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Solution 4 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-yellow-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-yellow-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaMoneyBillWave className="text-2xl text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                ROI-Focused Advertising
              </h3>
              <p className="text-gray-300 mb-4">
                Precision-targeted local ads that reach customers actively looking for your services, with transparent performance tracking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Geo-targeted campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Performance tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Conversion optimization</span>
                </li>
              </ul>
              <Link href="/services#advertising">
                <span className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Solution 5 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-red-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaMobileAlt className="text-2xl text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Mobile Customer Experience
              </h3>
              <p className="text-gray-300 mb-4">
                Frictionless booking, instant communication, and seamless service delivery that delights customers and generates referrals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Online booking system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">SMS notifications</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Customer portal</span>
                </li>
              </ul>
              <Link href="/services#customer-experience">
                <span className="text-red-400 hover:text-red-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Solution 6 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-orange-800 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 opacity-20 rounded-bl-full"></div>
              <div className="bg-orange-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-300 mb-4">
                Clear, actionable insights on your marketing performance with custom dashboards that show exactly what's working and what's not.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Custom dashboards</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">ROI tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Monthly strategy calls</span>
                </li>
              </ul>
              <Link href="/services#analytics">
                <span className="text-orange-400 hover:text-orange-300 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                Schedule a Solution Consultation
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Industry-Specific Section */}
      <section id="industry-solutions" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Solutions For Your Industry
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            AI marketing strategies customized for your specific trade
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Medical Spas */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaLeaf className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Medical Spas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Targeted patient acquisition</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Treatment-specific marketing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Local competitor intelligence</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/medical-spas">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Medical spa-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            {/* Plumbing */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaWrench className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Plumbing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Emergency service visibility</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Water system specialist targeting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 appointment booking</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/plumbing">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Plumbing-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* HVAC */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaSnowflake className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                HVAC
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Seasonal campaign automation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Maintenance plan marketing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Local rebate promotion</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/hvac">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    HVAC-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Electrical */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaBolt className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Electrical
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Safety certification promotion</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Emergency service visibility</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Smart home service targeting</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/electrical">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Electrical-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* General Contracting */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaHammer className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Contracting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Project showcase marketing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Lead qualification tools</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Reputation management</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/contracting">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Contracting-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Lawyers */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaGavel className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Lawyers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Practice area targeting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Ethics-compliant marketing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Case type qualification</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/legal">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Legal-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Medical Professionals */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaStethoscope className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Medical Professionals
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>HIPAA-compliant marketing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Patient education automation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Referral network building</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/medical">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Medical-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Roofing */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaHome className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Roofing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Storm-season campaign automation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Before/after portfolio showcasing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Emergency service visibility</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/roofing">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Roofing-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Recruiting */}
            <div className="bg-black bg-opacity-60 rounded-xl p-8 border border-blue-900 hover:border-blue-700 transition-all">
              <div className="flex items-center justify-center mb-6">
                <FaUsers className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-400">
                Recruiting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Candidate match technology</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Industry-specific talent pools</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Employer brand development</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/industries/recruiting">
                  <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center text-sm">
                    Recruiting-specific solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see your specific industry? We have tailored solutions for all types of local service businesses.
            </p>
            <Link href="/contact">
              <span className="bg-blue-900/50 hover:bg-blue-900/70 text-white font-medium py-3 px-6 rounded-lg border border-blue-800 transition duration-300 inline-flex items-center">
                <FaCommentDots className="mr-2 text-blue-400" />
                Talk to a specialist about your industry
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Packages Section */}
      <section id="packages" className="py-16 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Flexible solutions tailored to your business size and goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Essential Package */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-800 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-1 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-green-400">Essential</h3>
                <p className="text-gray-400 mb-6">Perfect for small local businesses just starting with digital marketing</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$997</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Local SEO & Google Maps optimization</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Basic review management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Monthly performance reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Single location support</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Standard response time</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link href="/contact?package=essential">
                    <span className="bg-green-900 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg border border-green-700 transition duration-300 inline-block w-full text-center">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Advanced Package */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-blue-800 hover:border-blue-700 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 hover:shadow-2xl z-10 scale-105">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="bg-blue-900/20 text-center py-2">
                <span className="text-blue-300 font-medium text-sm">MOST POPULAR</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Advanced</h3>
                <p className="text-gray-400 mb-6">Comprehensive solution for established businesses ready to grow</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$1,997</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Everything in Essential</strong>, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>AI Lead Generation system</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>ROI-focused advertising campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Multi-location support (up to 3)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Priority support & weekly check-ins</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link href="/contact?package=advanced">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block w-full text-center">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-purple-800 hover:border-purple-700 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">Premium</h3>
                <p className="text-gray-400 mb-6">Enterprise-level solution for maximum growth and ROI</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">$3,997</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Everything in Advanced</strong>, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Complete mobile customer experience</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Custom analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Unlimited location support</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 VIP support & dedicated manager</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link href="/contact?package=premium">
                    <span className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg border border-purple-700 transition duration-300 inline-block w-full text-center">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Need a custom solution? We can tailor our services to your specific needs.</p>
            <Link href="/contact?custom=true">
              <span className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-700 transition duration-300 inline-flex items-center">
                <FaCommentDots className="mr-2 text-blue-400" />
                Schedule a Custom Solution Consultation
              </span>
            </Link>
          </div>
          
          {/* Schema markup for packages */}
          <PackageSchema />
          
          {/* Main page schema markup */}
          <LocalServicesPageSchema />
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Real results from local service businesses just like yours
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-800">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Apex Plumbing</h3>
                    <p className="text-sm text-gray-400">Chicago, IL</p>
                  </div>
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Leads Per Month</span>
                    <span className="font-bold">+147%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-300 mb-6">
                  "SpotCircuit transformed our online presence. We're now the top-ranked plumber in our service area and getting more qualified leads than we can handle."
                </blockquote>
                
                <p className="text-sm text-gray-400 mb-3">Solutions implemented:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">Local SEO</span>
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Lead Generation</span>
                  <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">Reviews</span>
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <Link href="/case-studies/apex-plumbing">
                  <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                    Read full case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-800">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">CoolAir HVAC</h3>
                    <p className="text-sm text-gray-400">Dallas, TX</p>
                  </div>
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Cost Per Acquisition</span>
                    <span className="font-bold">-62%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-300 mb-6">
                  "We were spending a fortune on leads that rarely converted. SpotCircuit's targeting helped us slash our marketing costs while booking more high-value jobs."
                </blockquote>
                
                <p className="text-sm text-gray-400 mb-3">Solutions implemented:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-1 rounded">ROI Advertising</span>
                  <span className="bg-orange-900/30 text-orange-400 text-xs px-2 py-1 rounded">Analytics</span>
                  <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">AI Lead Gen</span>
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <Link href="/case-studies/coolair-hvac">
                  <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                    Read full case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-800">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Volt Electric</h3>
                    <p className="text-sm text-gray-400">Denver, CO</p>
                  </div>
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">New Customers</span>
                    <span className="font-bold">+94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-300 mb-6">
                  "The automated booking system has been a game-changer. Customers love scheduling online, and we've reduced our admin costs while growing our business."
                </blockquote>
                
                <p className="text-sm text-gray-400 mb-3">Solutions implemented:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded">Mobile CX</span>
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Lead Generation</span>
                  <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">Local SEO</span>
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <Link href="/case-studies/volt-electric">
                  <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                    Read full case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/case-studies">
              <span className="bg-blue-900/30 hover:bg-blue-900/50 text-white font-medium py-3 px-6 rounded-lg border border-blue-800 transition duration-300 inline-flex items-center">
                View all success stories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Common questions about our AI-powered marketing solutions
          </p>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-800 transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaSearch className="text-blue-500 mr-3 flex-shrink-0" />
                How quickly will I see results from your local SEO services?
              </h3>
              <p className="text-gray-300">
                Most clients see initial ranking improvements within 30-60 days. Local map pack results often appear faster than organic rankings. Our comprehensive strategy includes immediate optimizations to your Google Business Profile and citation cleanup, followed by ongoing content and link building for lasting results. We'll provide weekly progress reports so you can track your improvement in real-time.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-800 transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaMoneyBillWave className="text-blue-500 mr-3 flex-shrink-0" />
                What's your pricing structure for local service businesses?
              </h3>
              <p className="text-gray-300">
                We offer flexible packages starting at $997/month for our essential local visibility services. For businesses looking for comprehensive marketing solutions, our premium packages range from $1,997-$3,997/month based on service area size and competition level. All packages include our AI-powered tools, dedicated account management, and detailed performance reporting. We also offer a 30-day satisfaction guarantee for new clients.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-800 transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaRobot className="text-blue-500 mr-3 flex-shrink-0" />
                How does your AI technology differ from traditional marketing agencies?
              </h3>
              <p className="text-gray-300">
                Our proprietary AI technology analyzes thousands of successful local service businesses to identify what drives visibility and lead generation in your specific industry. Unlike traditional agencies that rely on manual processes and one-size-fits-all strategies, our AI constantly adapts to algorithm changes and customer behavior patterns. This allows us to implement more precise targeting, create more effective content, and optimize your marketing budget with significantly better ROI than conventional methods.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-800 transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-3 flex-shrink-0" />
                Do I need to sign a long-term contract?
              </h3>
              <p className="text-gray-300">
                No. While our most successful clients stay with us for years, we don't believe in locking you into long-term contracts. Our services are month-to-month after an initial 3-month commitment period that allows our strategies enough time to demonstrate meaningful results. We're confident in our ability to deliver value, which is why we let our results speak for themselves instead of relying on lengthy contract terms.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-800 transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaChartLine className="text-blue-500 mr-3 flex-shrink-0" />
                How do you measure success and track ROI?
              </h3>
              <p className="text-gray-300">
                We track multiple key performance indicators including search rankings, website traffic, lead volume, conversion rates, cost per acquisition, and overall ROI. You'll receive access to our client dashboard with real-time performance data and comprehensive monthly reports. We also integrate with your CRM or booking system to track leads all the way to booked jobs, giving you full visibility into how our marketing efforts directly impact your bottom line.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/faq">
              <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                View more frequently asked questions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section id="get-started" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-blue-500/10 to-transparent rounded-full"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 mb-6 rounded-full bg-blue-900/50 border border-blue-700/50 backdrop-blur-sm"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 font-medium">
                Transform Your Local Business Today
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500">Dominate</span> Your Local Market?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of successful local service businesses using SpotCircuit's AI-powered marketing solutions to grow their customer base and revenue.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="group w-full sm:w-auto">
                <div className="relative overflow-hidden rounded-xl p-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 group-hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <div className="absolute inset-0.5 bg-gradient-to-r from-green-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 group-hover:bg-transparent">
                    Schedule a Free Strategy Session
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
              
              <Link href="/audit" className="group w-full sm:w-auto">
                <div className="relative overflow-hidden rounded-xl p-0.5 bg-gradient-to-r from-gray-700 to-gray-800 group-hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/30">
                  <div className="absolute inset-0.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 bg-gray-900/80 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 group-hover:bg-transparent border border-gray-700 group-hover:border-gray-600">
                    Get a Free Local SEO Audit
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.17.708l1.05-.15a1 1 0 011.2.983V7h1a1 1 0 010 2H8v1a1 1 0 01-1 1H6a1 1 0 110-2h1V9a1 1 0 01-1-1V5.5a1 1 0 01.672-.943l.966-.322a1 1 0 10-.59-1.914l-.966.323zM12 18a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300">Rated 4.9/5 from <span className="font-semibold text-white">200+</span> local service businesses</p>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/50 w-full max-w-xs justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((img) => (
                    <div key={img} className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden">
                      <div className={`w-full h-full ${['bg-blue-400', 'bg-green-400', 'bg-purple-400'][img-1]}`}></div>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-300">Trusted by <span className="font-semibold text-white">500+</span> businesses</p>
                  <p className="text-xs text-gray-400">across 25+ service industries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LocalServicesPage;
