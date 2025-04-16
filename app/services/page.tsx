"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaBullseye, FaStream, FaIndustry, FaCogs, FaArrowRight, FaCheckCircle, FaHome, FaEnvelope } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineChartBar } from 'react-icons/hi';

const ServicesPage = () => {
  return (
    <>
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
                Stop Drowning in Chaos: Automate & Optimize Your Home Service Business
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                SpotCircuit builds custom AI-powered automation and intelligent SEO systems specifically designed for businesses that operate in the home. Streamline scheduling, generate qualified local leads, build expert teams faster, and reclaim your time.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="#services">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                    Optimize My Service Business
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* We Understand Your World Section */}
        <section id="understand" className="py-16 md:py-24 bg-black relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Running a Home Service Business <span className="gradient-text">Isn't Easy</span>. We Get It.</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Managing field technicians or sales teams, juggling complex schedules, generating consistent local leads, ensuring quality service in customers' homes, and dealing with seasonal demands – it's a unique operational challenge. Manual processes and outdated marketing create bottlenecks that cost you time and money.
              </p>
            </motion.div>
            
            {/* Pain Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {/* Pain Point 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <HiOutlineClock className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Scheduling Nightmares</h3>
                <p className="text-gray-300 flex-grow">Difficulty optimizing routes, handling emergency calls, managing technician availability? Your time is being wasted on manual scheduling.</p>
              </motion.div>

              {/* Pain Point 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Leaky Lead Funnel</h3>
                <p className="text-gray-300 flex-grow">Struggling to consistently generate local, qualified leads beyond word-of-mouth or basic ads? Missing out after storms or during peak seasons?</p>
              </motion.div>

              {/* Pain Point 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Field Team Friction</h3>
                <p className="text-gray-300 flex-grow">Challenges in dispatching, communication, job documentation, and ensuring consistent service quality? Your customers notice when your team isn't in sync.</p>
              </motion.div>

              {/* Pain Point 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FaStream className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Tech/Sales Talent Treadmill</h3>
                <p className="text-gray-300 flex-grow">Difficulty finding reliable technicians or skilled in-home salespeople? Long ramp-up times for new hires? Your growth is limited by your ability to build a team.</p>
              </motion.div>

              {/* Pain Point 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FaCogs className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Admin Overload</h3>
                <p className="text-gray-300 flex-grow">Drowning in paperwork, manual follow-ups, and inefficient back-office tasks? Your business is running you instead of you running your business.</p>
              </motion.div>

              {/* Pain Point 6 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Customer Retention Struggle</h3>
                <p className="text-gray-300 flex-grow">Difficulty maintaining consistent follow-ups and nurturing relationships after service? Your competitors are stealing your customers with better systems.</p>
              </motion.div>
            </div>

            {/* Industry Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">The <span className="gradient-text">Numbers</span> Tell The Story</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Home service businesses face unique challenges that require specialized solutions:
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "68%", label: "of home service businesses struggle with scheduling efficiency" },
                { value: "73%", label: "report difficulty finding and retaining qualified technicians" },
                { value: "4.6", label: "hours per week wasted on manual administrative tasks" },
                { value: "42%", label: "of customers use voice search to find local service providers" },
                { value: "3.2x", label: "higher conversion rate for optimized local service pages" },
                { value: "58%", label: "of service calls could be automated or streamlined" },
                { value: "$1,250", label: "average cost of a bad hire in the home service industry" },
                { value: "87%", label: "of customers check online reviews before choosing a provider" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-4 md:p-6 rounded-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Your Custom <span className="gradient-text">Automation Partner</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                We don't use cookie-cutter solutions. Our process involves deep analysis of your specific home service operation, designing a tailored strategy, seamless implementation (integrating with tools you already use like GHL, ServiceTitan, Jobber where applicable), and continuous optimization based on results.
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
              <h2 className="gradient-text text-3xl md:text-5xl font-bold mb-6">Our AI-Powered Solutions for Home Service Leaders</h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">SpotCircuit applies cutting-edge AI, automation, and SEO to directly address these challenges, building systems that work for your home service business:</p>
            </motion.div>
            
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="#seo" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                SEO Optimization
              </a>
              <a href="#local" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                Local Marketing
              </a>
              <a href="#content" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                Content Strategy
              </a>
              <a href="#technical" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                Technical SEO
              </a>
              <a href="#automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                AI Automation
              </a>
              <a href="#analytics" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                Analytics & Reporting
              </a>
            </div>
            
            {/* SEO Optimization Section */}
            <section id="seo" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">SEO Optimization</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Our AI-powered SEO optimization helps your home service business rank higher in search results, attract more qualified leads, and outperform competitors in your local market.
                </p>
              </motion.div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Service 1: Automated Local Lead Generation */}
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
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Get Found Locally & Fill Your Schedule</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Not enough qualified calls? Invisible online when homeowners search? Wasting money on generic ads?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Dominate local search with hyperlocal SEO and Google Business Profile optimization, run targeted AI-powered ad campaigns in specific service areas, automate lead qualification & follow-up, build systems for generating reviews, and implement storm/event-triggered marketing.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Consistent flow of high-intent local leads, higher booking rates, maximized marketing ROI, and predictable scheduling.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-blue-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Local SEO", "Home Service Leads", "Google Business Profile", "Roofing Leads"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200">{tag}</span>
                      ))}
                      <Link href="/industries/hvac" className="text-xs px-3 py-1 rounded-full bg-green-900/50 text-green-200 hover:bg-green-800/50 transition-colors">
                        HVAC Leads
                      </Link>
                      {["Plumbing Leads", "Automated Appointment Setting"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 2: Streamlined Field & Office Operations */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <FaCogs className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">Automate Your Workflow, Boost Efficiency</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Chaotic scheduling? Inefficient dispatch? Communication gaps? Repetitive admin tasks?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Implement workflow automation for scheduling, dispatch, customer communication (reminders, follow-ups), job documentation, invoicing, and reporting. Optimize your CRM or Field Service Management tools. Automate data entry and internal processes.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-purple-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Reduced errors, significant time savings, smoother operations, improved team communication, better resource allocation, and scalable processes.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-purple-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Workflow Automation", "Service Scheduling", "Dispatch Software", "FSM Automation", "Home Service Operations", "Process Improvement"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-900/50 text-purple-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 3: Accelerated Talent Acquisition */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mr-4 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-indigo-300 transition-all duration-300">Build Your Expert Team Faster</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Can't find good techs/sales reps? New hires take too long to train? Losing valuable team knowledge?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Use AI-powered sourcing & screening to find candidates suited for field/in-home roles. Build automated onboarding specifically for technicians and sales reps (safety, service protocols, sales process). Capture veteran expertise into accessible SOPs and video training.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-indigo-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Hire qualified staff faster, dramatically reduce ramp-up time, ensure consistent service standards, and lower turnover costs.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-indigo-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Technician Recruiting", "Home Service Sales Training", "Field Service Onboarding", "SOPs for Service Business", "AI Recruiting"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service 4: AI-First SEO for Home Services */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <FaBrain className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Ensure Homeowners Find YOU First</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">Problem Recap:</p>
                    <p className="text-blue-100">Competitors dominating local search? Website not attracting the right visitors? Missing out on voice search and AI-generated answers?</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">What We Do:</p>
                    <p className="text-blue-100">Implement AI-friendly semantic structures, optimize for local voice search and "near me" queries, align content with homeowner questions answered by LLMs, and ensure technical SEO best practices for local discovery.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-300 mb-1">The Outcome:</p>
                    <p className="text-blue-100">Foundational online visibility, attracts high-intent local searchers, builds long-term organic lead source, and positions you as the authority when homeowners ask AI about your services.</p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-blue-300 mb-1">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI SEO", "Local SEO Services", "Voice Search Optimization", "Schema Markup for Services", "Home Service SEO"].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
            </section>

            {/* Local Marketing Section */}
            <section id="local" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">Local Marketing</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Dominate your local service area with targeted marketing strategies designed specifically for home service businesses operating in specific neighborhoods and communities.
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <FaBullseye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Hyperlocal Marketing Strategies</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">What We Offer:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Google Business Profile optimization for maximum local visibility</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Neighborhood-specific ad campaigns with precise geotargeting</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Local citation building and directory optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Review generation and management systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Dominate "near me" searches in your service area</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Increase visibility when homeowners search for emergency services</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Build trust through consistent positive reviews</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Reduce customer acquisition costs with targeted local campaigns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Strategy Section */}
            <section id="content" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">Content Strategy</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Create compelling, service-specific content that converts visitors into customers and establishes your authority in your home service niche.
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <FaStream className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">Strategic Content Creation</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-300">What We Offer:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Service-specific landing pages that convert</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Seasonal content campaigns aligned with service demand</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">FAQ content that answers homeowner questions</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Blog posts that establish your expertise</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-300">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Rank for valuable service-specific keywords</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Educate customers and reduce pre-sale questions</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Build trust and credibility in your service area</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Improve conversion rates with persuasive content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical SEO Section */}
            <section id="technical" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">Technical SEO</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Ensure your website's technical foundation is optimized for search engines, providing a fast, secure, and accessible experience for potential customers.
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <FaCogs className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Technical Optimization</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">What We Offer:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Website speed optimization for mobile and desktop</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Schema markup implementation for rich results</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Mobile-friendly design and responsive optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Site architecture and internal linking improvements</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Improved search engine rankings</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Better user experience leading to higher conversion rates</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Enhanced visibility in search results with rich snippets</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Reduced bounce rates and increased time on site</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Automation Section */}
            <section id="automation" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">AI Automation</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Leverage cutting-edge artificial intelligence to automate repetitive tasks, streamline operations, and create personalized customer experiences.
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <FaBrain className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">Intelligent Automation Solutions</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-300">What We Offer:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">AI-powered scheduling and dispatch optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Automated customer communication workflows</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Intelligent lead qualification and routing</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Predictive maintenance and service recommendations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-300">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Significant time savings on administrative tasks</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Improved customer satisfaction through faster response times</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Reduced human error in scheduling and customer management</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Ability to scale operations without proportionally increasing staff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Analytics & Reporting Section */}
            <section id="analytics" className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h3 className="gradient-text text-3xl md:text-4xl font-bold mb-6">Analytics & Reporting</h3>
                <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
                  Gain actionable insights into your business performance with custom dashboards and detailed reporting that track the metrics that matter most.
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group mb-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <HiOutlineChartBar className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">Data-Driven Decision Making</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">What We Offer:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Custom KPI dashboards for home service businesses</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Lead tracking and attribution reporting</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Marketing ROI analysis and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Operational efficiency metrics and benchmarking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Clear visibility into marketing performance and ROI</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Identify operational bottlenecks and improvement opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Make data-driven decisions about service offerings and pricing</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-blue-100">Track progress toward business growth goals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
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
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Proven Success <span className="gradient-text">In Your Trade</span></h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                We specialize in building custom automation and optimization systems for home service businesses, including:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                {[
                  { icon: FaHome, name: "Roofing", href: "/industries#roofing" },
                  { icon: FaCogs, name: "HVAC", href: "/industries/hvac" },
                  { icon: FaStream, name: "Plumbing", href: "/industries#plumbing" },
                  { icon: FaBullseye, name: "Electrical", href: "/industries#electrical" },
                  { icon: FaUsers, name: "Pest Control", href: "/industries#pest-control" },
                  { icon: FaIndustry, name: "Flooring", href: "/industries#flooring" },
                  { icon: FaBrain, name: "Landscaping", href: "/industries#landscaping" },
                  { icon: FaCheckCircle, name: "Pool Services", href: "/industries#pool-services" }
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full"
                  >
                    <Link href={industry.href} className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <industry.icon className="text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{industry.name}</h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqAccordion 
          title="Home Service Business <span class='gradient-text'>FAQs</span>"
          subtitle="Common questions about our services for home service businesses."
          faqs={[
            {
              question: "What types of home service businesses do you work with?",
              answer: "We work with a wide range of home service businesses including roofing, HVAC, plumbing, electrical, pest control, landscaping, flooring, pool services, and more. Our solutions are tailored to the specific needs of each trade while addressing the common challenges all home service businesses face."
            },
            {
              question: "How do you help home service businesses generate more leads?",
              answer: "We implement a multi-channel lead generation strategy that includes local SEO optimization, Google Business Profile enhancement, targeted paid advertising, social media marketing, and automated follow-up systems. Our AI analyzes your service area demographics and competition to create the most effective approach for your specific business."
            },
            {
              question: "Can you help with scheduling and dispatching optimization?",
              answer: "Yes, we specialize in automating and optimizing scheduling and dispatching processes. Our systems can integrate with your existing field service software to optimize technician routes, reduce drive time, balance workloads, and automatically handle schedule changes or emergency calls. This typically results in 20-30% more jobs completed per day."
            },
            {
              question: "How do you improve customer retention for service businesses?",
              answer: "We implement automated communication systems that maintain contact with customers through their entire lifecycle. This includes appointment reminders, follow-up surveys, maintenance reminders, seasonal service promotions, and personalized offers based on their service history. These touchpoints significantly increase repeat business and referrals."
            },
            {
              question: "What makes your approach different from other marketing agencies?",
              answer: "Unlike general marketing agencies, we specialize exclusively in home service businesses and build custom AI systems tailored to your specific needs. We focus on the entire customer journey from acquisition to retention, not just marketing. Our solutions integrate with your operations to create a seamless experience for both your team and your customers."
            },
            {
              question: "How long does implementation take?",
              answer: "Implementation timelines vary based on the complexity of your needs, but typically range from 2-6 weeks. We use a phased approach to ensure minimal disruption to your operations. The initial setup focuses on quick wins that generate immediate ROI, while more complex systems are implemented over time as your team adapts to the new processes."
            },
            {
              question: "Do I need to replace my current software systems?",
              answer: "No, our solutions are designed to integrate with your existing systems whenever possible. We can work with popular field service management software like ServiceTitan, Jobber, Housecall Pro, and others. If your current systems have limitations, we can recommend complementary solutions that fill the gaps without requiring a complete overhaul."
            },
            {
              question: "How do you help with hiring and training challenges?",
              answer: "We implement automated recruitment funnels that attract qualified candidates, pre-screen applicants, and streamline the hiring process. For training, we create digital systems that standardize onboarding, track skill development, and provide on-demand resources for field technicians. This reduces training time and improves retention of both information and employees."
            },
            {
              question: "Can you help with seasonal business fluctuations?",
              answer: "Absolutely. We develop strategies to smooth out seasonal fluctuations through diversified service offerings, pre-booking campaigns, maintenance plans, and targeted marketing during slower periods. Our AI systems predict seasonal trends based on historical data and local factors, allowing for proactive rather than reactive business planning."
            },
            {
              question: "What kind of ROI can I expect from your services?",
              answer: "While results vary by business, our home service clients typically see a 3-5x return on investment within the first year. This comes from a combination of increased lead volume, higher conversion rates, improved operational efficiency, and enhanced customer retention. We establish clear KPIs at the beginning of our engagement and provide transparent reporting so you can track your ROI."
            }
          ]}
        />

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

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-4 bg-gray-900 overflow-hidden relative">
          <div className="section-divider absolute top-0 left-0 right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="gradient-text">Transform</span> Your Home Service Business?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Take the first step toward automation and optimization. Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ContactForm />
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
                <Link href="/contact" className="inline-block">
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
    </>
  );
};

export default ServicesPage;