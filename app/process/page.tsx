"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaTools, FaLightbulb, FaCogs, FaCheck, FaArrowRight } from 'react-icons/fa';

const ProcessPage = () => {
  const processSteps = [
    {
      icon: FaLightbulb,
      title: "Discovery & Analysis",
      description: "We begin by deeply understanding your business goals, challenges, and current operations. Our AI systems analyze your market position and identify key opportunities.",
      color: "blue"
    },
    {
      icon: FaTools,
      title: "Strategy Development",
      description: "Based on our analysis, we develop a customized AI implementation strategy tailored to your specific needs, with clear KPIs and expected outcomes.",
      color: "purple"
    },
    {
      icon: FaCogs,
      title: "Implementation",
      description: "Our team of experts deploys the AI solutions seamlessly into your existing workflows, with minimal disruption and maximum efficiency.",
      color: "indigo"
    },
    {
      icon: FaChartLine,
      title: "Optimization & Growth",
      description: "We continuously monitor performance, make data-driven adjustments, and scale your AI capabilities as your business grows and evolves.",
      color: "blue"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/headerimage.png"
          alt="SpotCircuit header image"
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
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Icon */}
              <div className="icon-container mb-6 glow-effect">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Our Proven Process
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to implementing AI solutions that deliver measurable results for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-20 px-4 bg-white overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-20 relative"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 -z-10"></div>
                  )}
                  
                  <div className="flex items-start gap-8">
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color === 'blue' ? 'from-blue-500 to-blue-600' : step.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-indigo-500 to-indigo-600'} text-white shadow-lg`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-grow">
                      <div className="flex items-center mb-4">
                        <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color === 'blue' ? 'from-blue-600 to-blue-400' : step.color === 'purple' ? 'from-purple-600 to-purple-400' : 'from-indigo-600 to-indigo-400'}`}>
                          Step {index + 1}: {step.title}
                        </h3>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-100">
                        <p className="text-gray-700 text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="gradient-bg-dark py-20 px-4 overflow-hidden relative">
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
              <h2 className="gradient-text text-3xl md:text-5xl font-bold mb-6">Why Our Process Works</h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">Our systematic approach has been refined through years of experience and delivers consistent results.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Data-Driven", description: "Every decision is backed by comprehensive data analysis and insights." },
                { title: "Customized", description: "Solutions are tailored to your specific business needs and objectives." },
                { title: "Scalable", description: "Our process grows with your business, adapting to changing requirements." },
                { title: "Transparent", description: "Clear communication and reporting throughout the entire process." },
                { title: "Collaborative", description: "We work closely with your team to ensure seamless integration." },
                { title: "Results-Focused", description: "Measurable outcomes and ROI are at the center of our approach." }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-500/20 mr-3">
                      <FaCheck className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-blue-100">{benefit.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Experience Our Process?</h2>
              <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
                Let's discuss how our proven approach can help your business achieve its goals through strategic AI implementation.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact">
                  <span className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-xl transition duration-300 text-lg transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Schedule a Consultation
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

export default ProcessPage;