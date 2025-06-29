"use client";

import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaTools, FaLightbulb, FaCogs, FaCheck, FaArrowRight } from 'react-icons/fa';
import HowToSchema from '../components/HowToSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import SpeakableSchema from '../components/SpeakableSchema';
import FaqSchema from '../components/FaqSchema';
import EntitySchema from '../components/EntitySchema';

const ProcessPage = () => {
  const processSteps = [
    {
      icon: FaLightbulb,
      title: "Discovery & Analysis",
      description: "We begin by deeply understanding your home service business goals, challenges, and current operations. Our team analyzes your local market position, customer acquisition costs, scheduling efficiency, and field operations to identify key opportunities.",
      details: [
        "Comprehensive audit of your current digital presence and lead generation systems",
        "Analysis of your scheduling, dispatching, and field service operations",
        "Review of customer acquisition costs and lifetime value metrics",
        "Evaluation of your team structure and training processes",
        "Identification of automation opportunities specific to your trade"
      ],
      color: "blue"
    },
    {
      icon: FaTools,
      title: "Strategy Development",
      description: "Based on our analysis, we develop a customized AI implementation strategy tailored to your specific home service business needs, with clear KPIs and expected outcomes.",
      details: [
        "Customized roadmap for implementing automation in your scheduling and dispatch",
        "Strategic plan for optimizing your local lead generation and customer acquisition",
        "Framework for streamlining field operations and technician management",
        "Timeline for implementation with minimal disruption to your daily operations",
        "Projected ROI calculations and performance benchmarks"
      ],
      color: "purple"
    },
    {
      icon: FaCogs,
      title: "Implementation",
      description: "Our team of experts deploys the AI solutions seamlessly into your existing workflows, integrating with tools you already use like ServiceTitan, Jobber, or other field service management software.",
      details: [
        "Setup and integration with your existing field service management software",
        "Implementation of automated scheduling and dispatch optimization systems",
        "Deployment of local lead generation and customer acquisition funnels",
        "Configuration of customer communication and follow-up automation",
        "Training for your team on all new systems and processes"
      ],
      color: "indigo"
    },
    {
      icon: FaChartLine,
      title: "Optimization & Growth",
      description: "We continuously monitor performance, make data-driven adjustments, and scale your AI capabilities as your home service business grows and expands into new service areas or offerings.",
      details: [
        "Regular performance reviews and optimization of all implemented systems",
        "Ongoing refinement of lead generation and customer acquisition strategies",
        "Scaling automation as your team grows and service area expands",
        "Adaptation to seasonal demand fluctuations in your specific trade",
        "Continuous improvement based on technician and customer feedback"
      ],
      color: "blue"
    }
  ];

  // Convert the process steps to schema format
  const howToSteps = processSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  // Convert FAQ items for schema markup
  const faqItems = [
    {
      question: "How long does the entire process typically take from start to finish?",
      answer: "The timeline varies based on the complexity of your business and the scope of implementation, but typically ranges from 8-12 weeks for full deployment. We use a phased approach that delivers value at each stage."
    },
    {
      question: "How much of my time will be required during the process?",
      answer: "We've designed our process to minimize demands on your time while ensuring you remain informed and involved in key decisions. Typically, we require 2-4 hours per week from key stakeholders during the Discovery phase."
    },
    {
      question: "Will my team need technical knowledge to participate in the process?",
      answer: "No technical expertise is required from your team. We handle all technical aspects of implementation and provide user-friendly interfaces and training for any systems your team will use."
    },
    {
      question: "How do you ensure the process doesn't disrupt our daily operations?",
      answer: "We implement changes incrementally using a parallel deployment approach, where new systems run alongside existing ones until fully tested and optimized."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Schema Markup */}
      <HowToSchema 
        name="Our AI Implementation Process for Home Service Businesses"
        description="A systematic approach to implementing AI solutions that deliver measurable results for your home service business."
        steps={howToSteps}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://spotcircuit.com", position: 1 },
          { name: "Process", url: "https://spotcircuit.com/process", position: 2 }
        ]} 
      />
      <SpeakableSchema cssSelectors={["p.text-xl.md\\:text-2xl.text-blue-100", ".text-lg.text-blue-200"]} />
      <FaqSchema faqs={faqItems} />
      <EntitySchema 
        name="AI Implementation Process"
        description="A systematic approach to implementing AI automation solutions for home service businesses including discovery, strategy development, implementation, and optimization."
        url="https://spotcircuit.com/process"
        entityType="Thing"
        relatedEntities={[
          {
            name: "Home Service Business Automation",
            url: "https://spotcircuit.com/services",
            description: "AI-powered automation solutions for home service businesses."
          },
          {
            name: "AI Strategy Development",
            url: "https://spotcircuit.com/process#strategy",
            description: "Custom AI strategy development for service businesses."
          }
        ]}
      />      <main className="flex-grow">
        {/* Header Image Section */}
        <img
          src="/static/images/process.webp"
          alt="SpotCircuit process image"
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
              <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to implementing AI solutions that deliver measurable results for your home service business.
              </p>
              <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
                Tailored specifically for roofing, HVAC, plumbing, electrical, and other home service trades.
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
                        <p className="text-gray-700 text-lg mb-6">{step.description}</p>
                        
                        {/* Details List */}
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">What This Includes:</h4>
                          <ul className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <motion.li 
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + (detailIndex * 0.1) }}
                                className="flex items-start"
                              >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                                  step.color === 'blue' ? 'bg-blue-500' : 
                                  step.color === 'purple' ? 'bg-purple-500' : 
                                  'bg-indigo-500'
                                }`}>
                                  <FaCheck className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-gray-700">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
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

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <FaqAccordion 
            title="Process <span class='gradient-text'>FAQs</span>"
            subtitle="Common questions about our implementation process for home service businesses."
            faqs={[
              {
                question: "How long does the entire process typically take from start to finish?",
                answer: "The timeline varies based on the complexity of your business and the scope of implementation, but typically ranges from 8-12 weeks for full deployment. We use a phased approach that delivers value at each stage: Discovery & Analysis (1-2 weeks), Strategy Development (2-3 weeks), Implementation (4-6 weeks), and initial Optimization (ongoing). You'll start seeing measurable improvements within the first 30 days."
              },
              {
                question: "How much of my time will be required during the process?",
                answer: "We've designed our process to minimize demands on your time while ensuring you remain informed and involved in key decisions. Typically, we require 2-4 hours per week from key stakeholders during the Discovery phase, 1-2 hours weekly during Strategy and Implementation, and then 30-60 minutes for regular check-ins during ongoing Optimization. Our goal is to deliver maximum results with minimal disruption to your daily operations."
              },
              {
                question: "Will my team need technical knowledge to participate in the process?",
                answer: "No technical expertise is required from your team. We handle all technical aspects of implementation and provide user-friendly interfaces and training for any systems your team will use. Our process is designed to be accessible to business owners and staff regardless of their technical background. We translate complex concepts into practical applications that everyone can understand."
              },
              {
                question: "How do you ensure the process doesn't disrupt our daily operations?",
                answer: "We implement changes incrementally using a parallel deployment approach, where new systems run alongside existing ones until fully tested and optimized. This minimizes disruption and allows your team to gradually adapt to new processes. We also schedule implementation activities around your business's natural cycles and peak periods to avoid interference with critical operations."
              },
              {
                question: "What happens if we need to make changes during implementation?",
                answer: "Our process is designed to be flexible and adaptive. We build in regular review points where we can adjust course based on new information or changing business needs. Our agile methodology allows us to pivot quickly without losing momentum or increasing costs. We view change as a natural part of the process rather than an exception."
              },
              {
                question: "How do you handle integration with our existing software systems?",
                answer: "During the Discovery phase, we conduct a comprehensive audit of your current technology stack. Our team has experience integrating with most major field service management platforms (ServiceTitan, Jobber, Housecall Pro, etc.) and CRM systems. We use API connections, middleware solutions, or direct integrations as appropriate to create a seamless flow of data between systems while preserving your existing workflows."
              },
              {
                question: "What kind of training do you provide for our team?",
                answer: "We provide comprehensive training tailored to different roles within your organization. This includes hands-on workshops, video tutorials, documentation, and live support sessions. We follow a 'train the trainer' approach where possible, empowering key team members to become internal experts who can support their colleagues and new hires in the future."
              },
              {
                question: "How do you measure the success of the implementation process?",
                answer: "We establish clear KPIs at the beginning of our engagement based on your business goals. These typically include metrics like lead conversion rates, customer acquisition costs, technician productivity, scheduling efficiency, and revenue growth. We provide regular reporting dashboards that track these metrics against baseline measurements, giving you full visibility into the ROI of our implementation."
              },
              {
                question: "What happens after the initial implementation is complete?",
                answer: "The Optimization & Growth phase is ongoing. After initial implementation, we continue to monitor performance, make data-driven adjustments, and identify new opportunities for improvement. We establish a regular cadence of strategy sessions to review results, address any issues, and plan for scaling as your business grows. Our goal is to be a long-term partner in your success, not just a one-time implementation vendor."
              },
              {
                question: "How do you ensure our team adopts the new systems and processes?",
                answer: "Change management is built into our process from day one. We use a combination of stakeholder engagement, clear communication of benefits, hands-on training, early wins demonstration, and ongoing support to ensure high adoption rates. We also help you identify and empower internal champions who can drive adoption from within your organization. Our experience shows that when people understand the 'why' behind changes and see tangible benefits, adoption follows naturally."
              }
            ]}
          />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Home Service Business?</h2>
              <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
                Take the first step toward automating and optimizing your operations with our proven process.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact">
                  <span className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-xl transition duration-300 text-lg transform hover:-translate-y-1 hover:shadow-lg inline-block flex items-center">
                    <span>Let's Begin</span>
                    <FaArrowRight className="ml-2" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>    </div>
  );
};

export default ProcessPage;