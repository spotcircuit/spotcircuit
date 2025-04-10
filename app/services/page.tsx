"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaBullseye, FaStream, FaIndustry, FaCogs, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/services.webp"
          alt="SpotCircuit services image"
          className="h-[75px] w-full object-cover overflow-hidden"
        />
        {/* Hero Section with modern styling */}
        <section id="hero" className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Icon */}
              <div className="icon-container mb-6 glow-effect">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Amplify Your Business with AI-Powered Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                SpotCircuit delivers targeted strategies for growth, efficiency, and market leadership in the digital age.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="#services">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Discover Our Services
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section with modern styling */}
        <section id="approach" className="py-20 px-4 bg-white overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Approach: <span className="gradient-text">Strategic AI Integration</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                We don't just apply AI; we integrate it strategically into your core business functions to solve specific challenges and unlock measurable value. Our process ensures solutions are tailored, effective, and scalable.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {[
                { icon: FaCheckCircle, title: "Deep Analysis", description: "Understanding your unique business landscape and objectives." },
                { icon: FaCheckCircle, title: "Custom Strategy", description: "Designing bespoke AI solutions aligned with your goals." },
                { icon: FaCheckCircle, title: "Seamless Implementation", description: "Integrating AI tools smoothly into your existing workflows." },
                { icon: FaCheckCircle, title: "Continuous Optimization", description: "Monitoring performance and refining strategies for ongoing success." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white backdrop-blur-sm bg-opacity-70 p-6 rounded-xl shadow-xl border border-blue-100 hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-3">
                      <item.icon className="h-5 w-5" />
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section with modern styling */}
        <section id="services" className="gradient-bg-dark py-20 px-4 overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="gradient-text text-3xl md:text-5xl font-bold mb-6">Tailored Services for Peak Performance</h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">Our AI-powered solutions are designed to address your specific business challenges and drive measurable results.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Service 1: AI-First SEO */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <FaBullseye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">AI-First SEO</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Struggling to gain visibility and rank higher in competitive search landscapes?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Leverage cutting-edge AI for deep keyword analysis, predictive content optimization, technical SEO audits, and automated link-building insights.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Dominate search rankings, attract high-quality organic traffic, and establish market authority.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-blue-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI SEO", "Search Engine Optimization", "Organic Growth", "Content Strategy", "Technical SEO"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 2: Automated Talent Acquisition */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">Automated Talent Acquisition</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Finding, attracting, and hiring top talent is slow, expensive, and resource-intensive?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Implement AI-driven platforms for intelligent candidate sourcing, automated screening, predictive hiring analytics, and enhanced candidate experience.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Hire better talent faster, reduce recruitment costs, and build high-performing teams efficiently.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-purple-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Recruiting", "Talent Acquisition", "HR Automation", "Candidate Sourcing", "Predictive Hiring"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-900/50 text-purple-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 3: High-Performance Lead Gen */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mr-4 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                    <FaBrain className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-indigo-300 transition-all duration-300">High-Performance Lead Gen</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Lead quality is inconsistent, sales cycles are long, and conversion rates are low?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Utilize AI algorithms to identify ideal customer profiles, predict purchase intent, qualify leads automatically, and personalize outreach at scale.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Fill your sales pipeline with high-intent, qualified prospects, shorten sales cycles, and boost conversion rates.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-indigo-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Lead Generation", "Sales Automation", "Predictive Analytics", "B2B Leads", "Customer Intent"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 4: Streamlined Operations */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <FaStream className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Streamlined Operations</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Manual processes, inefficient workflows, and operational bottlenecks are draining resources and hindering growth?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Implement AI-powered automation for repetitive tasks, optimize complex workflows, enhance data analysis, and improve resource allocation.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Boost operational efficiency, reduce costs, increase productivity, and free up your team for strategic initiatives.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-blue-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Operations", "Process Automation", "Workflow Optimization", "Business Efficiency", "RPA"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Industry Focus Section with modern styling */}
        <section id="industry-focus" className="py-20 px-4 bg-white overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <FaIndustry className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-4xl" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Focused Expertise, <span className="gradient-text">Broad Application</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                While we possess deep expertise in sectors like E-commerce and SaaS, our AI methodologies are versatile and proven to drive results across various industries. We tailor our approach to your specific market context.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Link Section with modern styling */}
        <section id="process-link" className="gradient-bg-dark py-16 px-4 overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <FaCogs className="text-white text-4xl" />
              </div>
              
              <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-6">See Our Proven Process</h2>
              <p className="text-lg text-blue-100 mb-10 max-w-3xl mx-auto">
                Understand the step-by-step methodology we use to turn AI strategy into tangible business results.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/process">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                    Explore Our Process <FaArrowRight className="ml-2" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section with modern styling */}
        <section id="final-cta" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center relative overflow-hidden">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Business?</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Let SpotCircuit be your partner in navigating the complexities of AI and achieving sustainable growth.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact">
                  <span className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-xl transition duration-300 text-lg transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Get Started Today
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;