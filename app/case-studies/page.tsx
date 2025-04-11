"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt, FaChartLine, FaLightbulb, FaTools, FaRocket } from 'react-icons/fa';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "The Fix Clinic",
      subtitle: "Healthcare Provider",
      description: "Developed and implemented a comprehensive digital strategy for this healthcare provider. Created automated systems for appointment scheduling, content management, and patient engagement. Improved online visibility through targeted SEO/AEO optimization and content automation.",
      url: "https://thefixclinic.com",
      results: [
        "48% increase in online appointment bookings",
        "62% improvement in search visibility for key treatment terms",
        "Reduced administrative workload by 15 hours per week"
      ],
      color: "blue",
      useScreenshot: true
    },
    {
      title: "BnB Tobacco",
      subtitle: "E-commerce Retailer",
      description: "Implemented comprehensive SEO/AEO optimization and e-commerce automation for one of the largest online tobacco retailers. Developed custom Shopify solutions, automated product listings, and optimized content for maximum visibility. Achieved significant improvements in organic traffic and conversion rates.",
      url: "https://bnbtobacco.com",
      results: [
        "73% increase in organic search traffic",
        "42% improvement in conversion rates",
        "Automated inventory management saving 25+ hours weekly"
      ],
      color: "purple",
      useScreenshot: true
    },
    {
      title: "Star City Games",
      subtitle: "Trading Card Retailer",
      description: "Revolutionized the online presence of the world's largest Magic: The Gathering retailer. Implemented advanced AI-driven product optimization, automated marketplace listings, and enhanced search visibility. Developed custom solutions for managing large-scale inventory and pricing automation.",
      url: "https://starcitygames.com",
      results: [
        "85% faster product listing process",
        "32% increase in organic traffic",
        "Automated price optimization across 100,000+ products"
      ],
      color: "indigo",
      useScreenshot: true
    },
    {
      title: "Mr. Maple",
      subtitle: "Specialty Plant Nursery",
      description: "Transformed the online presence of this specialty plant nursery through custom e-commerce solutions. Implemented automated inventory management, optimized product listings, and enhanced customer engagement. Developed specialized content automation for unique plant varieties.",
      url: "https://mrmaple.com",
      results: [
        "58% increase in online sales",
        "Reduced inventory management time by 65%",
        "Improved customer engagement metrics by 47%"
      ],
      color: "green",
      useScreenshot: true
    },
    {
      title: "Tube2Link",
      subtitle: "Content Transformation Platform",
      description: "Created an AI-powered video analysis and processing platform that transforms YouTube content into engaging blog posts and social media content. The platform leverages advanced NLP and AI technologies to automatically generate SEO-optimized content, extract key insights, and create multi-format content distribution strategies.",
      url: "https://tube2link.com",
      results: [
        "90% reduction in content creation time",
        "Increased content output by 5x with the same resources",
        "Improved SEO performance across repurposed content"
      ],
      color: "red",
      useScreenshot: true
    },
    {
      title: "AdUPlanner",
      subtitle: "Property Planning Tool",
      description: "Developed an innovative AI-powered ADU (Accessory Dwelling Unit) planning tool that combines Google Maps integration with OpenAI Vision analysis. The application allows users to input any address, visualizes the property on an interactive map, performs AI-based eligibility assessment, and analyzes property constraints.",
      url: "https://aduplanner-kz7dw2411-spotcircuits-projects.vercel.app/",
      results: [
        "Reduced planning time from days to minutes",
        "Increased ADU project feasibility assessments by 300%",
        "Improved accuracy of property constraint analysis"
      ],
      color: "yellow",
      useScreenshot: false,
      customImage: ""
    },
    {
      title: "Make to n8n Converter",
      subtitle: "Workflow Migration Tool",
      description: "Developed a professional web application that helps users convert Make.com workflows to n8n format. The tool analyzes uploaded Make.com JSON workflows, categorizes nodes by complexity, and calculates conversion costs based on a tiered pricing model.",
      url: "https://make-2-n8n.vercel.app/",
      results: [
        "Reduced workflow migration time by 85%",
        "Saved clients an average of 40 development hours per project",
        "Simplified complex workflow transitions with 98% accuracy"
      ],
      color: "teal",
      useScreenshot: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/casestudy.webp"
          alt="SpotCircuit case studies"
          className="h-[75px] w-full object-cover overflow-hidden"
        />
        
        {/* Hero Section */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="icon-container mb-6 glow-effect">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Real Results for Real Businesses
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Explore how we've helped businesses like yours achieve significant growth through AI-powered automation and intelligent SEO strategies.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`mb-20 p-8 rounded-2xl bg-gradient-to-br ${
                    study.color === 'blue' ? 'from-gray-900 to-blue-900/30' :
                    study.color === 'purple' ? 'from-gray-900 to-purple-900/30' :
                    study.color === 'indigo' ? 'from-gray-900 to-indigo-900/30' :
                    study.color === 'green' ? 'from-gray-900 to-green-900/30' :
                    study.color === 'red' ? 'from-gray-900 to-red-900/30' :
                    study.color === 'yellow' ? 'from-gray-900 to-yellow-900/30' :
                    'from-gray-900 to-teal-900/30'
                  } border border-gray-800 shadow-xl`}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-4">
                        <h2 className="text-3xl font-bold text-white mr-3">{study.title}</h2>
                        <Link href={study.url} target="_blank" rel="noopener noreferrer">
                          <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <FaExternalLinkAlt className="h-4 w-4" />
                          </span>
                        </Link>
                      </div>
                      <p className="text-blue-300 mb-4">{study.subtitle}</p>
                      <p className="text-gray-300 mb-6">{study.description}</p>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <FaChartLine className="mr-2 text-blue-400" />
                          Key Results
                        </h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-400 mr-2">✓</span>
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href={study.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <span className="glass-effect hover:bg-white/10 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center transition duration-300">
                          Visit Website
                          <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className={`w-full h-48 rounded-xl overflow-hidden border ${
                        study.color === 'blue' ? 'border-blue-800/50' :
                        study.color === 'purple' ? 'border-purple-800/50' :
                        study.color === 'indigo' ? 'border-indigo-800/50' :
                        study.color === 'green' ? 'border-green-800/50' :
                        study.color === 'red' ? 'border-red-800/50' :
                        study.color === 'yellow' ? 'border-yellow-800/50' :
                        'border-teal-800/50'
                      }`}>
                        <a href={study.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <div className="w-full h-full relative group">
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                              <span className="text-white font-medium">Visit Site</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-[1]"></div>
                            {study.useScreenshot ? (
                              <img 
                                src={`https://api.microlink.io?url=${encodeURIComponent(study.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                                alt={`${study.title} website screenshot`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  // Fallback if microlink fails
                                  e.currentTarget.src = `https://image.thum.io/get/width/600/crop/900/viewportWidth/1200/png/${study.url}`;
                                }}
                              />
                            ) : (
                              study.title === "AdUPlanner" ? (
                                <div className="w-full h-full bg-gradient-to-br from-yellow-900/30 to-yellow-700/20 flex flex-col items-center justify-center p-4 text-center">
                                  <div className="mb-2 bg-yellow-500/20 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                  <div className="text-lg font-semibold text-white mb-1">ADU Planner</div>
                                  <div className="text-xs text-yellow-200/70">AI-Powered Property Analysis</div>
                                  <div className="mt-3 grid grid-cols-2 gap-1 w-full">
                                    <div className="bg-yellow-800/20 rounded p-1 text-xs text-yellow-200/60">Maps API</div>
                                    <div className="bg-yellow-800/20 rounded p-1 text-xs text-yellow-200/60">OpenAI Vision</div>
                                  </div>
                                </div>
                              ) : (
                                <img 
                                  src={study.customImage}
                                  alt={`${study.title} project image`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    // Fallback to a gradient if image doesn't exist
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                      parent.classList.add('bg-gradient-to-br', 'from-yellow-900/20', 'to-yellow-700/10', 'flex', 'items-center', 'justify-center');
                                      const span = document.createElement('span');
                                      span.className = 'text-5xl opacity-50';
                                      span.textContent = study.title.charAt(0);
                                      parent.appendChild(span);
                                    }
                                  }}
                                />
                              )
                            )}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Overview Section */}
        <section className="py-16 md:py-24 gradient-bg-blue relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="icon-container mb-6 glow-effect mx-auto">
                <FaTools className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Proven <span className="gradient-text">Process</span></h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Here's how we consistently deliver exceptional results for our clients.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="modern-card group relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Discovery & Analysis</h3>
                  <p className="text-blue-100">We begin by deeply understanding your business goals, challenges, and current operations to identify key opportunities.</p>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="modern-card group relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Strategy Development</h3>
                  <p className="text-blue-100">Based on our analysis, we develop a customized AI implementation strategy tailored to your specific needs.</p>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="modern-card group relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Implementation</h3>
                  <p className="text-blue-100">Our team of experts deploys the AI solutions seamlessly into your existing workflows, integrating with tools you already use.</p>
                </motion.div>
                
                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="modern-card group relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Optimization & Growth</h3>
                  <p className="text-blue-100">We continuously monitor performance, make data-driven adjustments, and scale your AI capabilities as your business grows.</p>
                </motion.div>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/process">
                  <span className="glass-effect hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-xl inline-flex items-center transition duration-300 transform hover:-translate-y-1">
                    Learn More About Our Process
                    <FaRocket className="ml-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Business?</h2>
              <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
                Let's discuss how our AI-powered solutions can help you achieve similar results.
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

export default CaseStudiesPage;
