'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiZapier, SiHubspot, SiMake, SiNotion, SiAirtable, SiWebflow, SiSalesforce, SiGoogle } from 'react-icons/si';
import { FaTools, FaDatabase, FaRobot, FaEnvelope, FaCode, FaCloudUploadAlt } from 'react-icons/fa';

// Technology partner data
const techPartners = [
  { name: 'Next.js', url: 'https://nextjs.org/', icon: SiNextdotjs },
  { name: 'React', url: 'https://reactjs.org/', icon: SiReact },
  { name: 'Zapier', url: 'https://zapier.com/', icon: SiZapier },
  { name: 'HubSpot', url: 'https://www.hubspot.com/', icon: SiHubspot },
  { name: 'Make', url: 'https://www.make.com/', icon: SiMake },
  { name: 'Clay.com', url: 'https://www.clay.com/', icon: FaDatabase },
  { name: 'n8n', url: 'https://www.n8n.io/', icon: FaRobot },
  { name: 'Klaviyo', url: 'https://www.klaviyo.com/', icon: FaEnvelope },
];

const techPartners2 = [
  { name: 'HighLevel', url: 'https://www.gohighlevel.com/', icon: FaTools },
  { name: 'Lemlist', url: 'https://lemlist.com/', icon: FaEnvelope },
  { name: 'Pipedrive', url: 'https://www.pipedrive.com/', icon: FaDatabase },
  { name: 'Airtable', url: 'https://airtable.com/', icon: SiAirtable },
  { name: 'Google Workspace', url: 'https://workspace.google.com/', icon: SiGoogle },
  { name: 'Webflow', url: 'https://webflow.com/', icon: SiWebflow },
  { name: 'Notion', url: 'https://www.notion.so/', icon: SiNotion },
  { name: 'Salesforce', url: 'https://www.salesforce.com/', icon: SiSalesforce },
];

const navigation = {
  solutions: [
    { name: 'SEO Optimization', href: '/services#seo' },
    { name: 'Local Marketing', href: '/services#local' },
    { name: 'Content Strategy', href: '/services#content' },
    { name: 'Technical SEO', href: '/services#technical' },
    { name: 'AI Automation', href: '/services#automation' },
    { name: 'Analytics & Reporting', href: '/services#analytics' }
  ],
  industries: [
    { name: 'Plumbing', href: '/industries#plumbing' },
    { name: 'HVAC', href: '/industries#hvac' },
    { name: 'Electrical', href: '/industries#electrical' },
    { name: 'Landscaping', href: '/industries#landscaping' },
    { name: 'Roofing', href: '/industries#roofing' },
    { name: 'Home Services', href: '/industries#home' }
  ],
  resources: [
    { name: 'Case Studies', href: '/resources#case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'SEO Guide', href: '/resources#seo-guide' },
    { name: 'Marketing Tips', href: '/resources#tips' },
    { name: 'Free Tools', href: '/resources#tools' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-blue-950" aria-labelledby="footer-heading">
      <style jsx>{`
        .tech-logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
          padding: 0 1rem;
        }
        .tech-logo-container:hover {
          transform: translateY(-5px);
        }
        .tech-logo-label {
          font-size: 0.75rem;
          color: rgb(148 163 184);
          opacity: 0.7;
          transition: opacity 0.3s ease;
          margin-top: 0.5rem;
        }
        .tech-logo-container:hover .tech-logo-label {
          opacity: 1;
          color: white;
        }
        
        /* Slider Animation */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 8)); }
        }
        
        .slider {
          height: 100px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .slider::before, .slider::after {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
          content: "";
          height: 100px;
          position: absolute;
          width: 100px;
          z-index: 2;
        }
        
        .slider::before {
          left: 0;
          top: 0;
        }
        
        .slider::after {
          right: 0;
          top: 0;
          transform: rotateZ(180deg);
        }
        
        .slider .slide-track {
          animation: scroll 30s linear infinite;
          display: flex;
          width: calc(250px * 16);
        }
        
        .slider .slide {
          height: 100px;
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Second slider animation in opposite direction */
        @keyframes scroll-reverse {
          0% { transform: translateX(calc(-250px * 8)); }
          100% { transform: translateX(0); }
        }
        
        .slider-reverse .slide-track {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500 rounded-full opacity-5 filter blur-3xl"></div>
      </div>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16 text-black fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C240,0 480,48 720,24 C960,0 1200,48 1440,24 L1440,48 L0,48 Z"></path>
        </svg>
      </div>
      
      {/* Partners and Technologies Section */}
      <div className="relative border-b border-white/10 pb-8">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-lg font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Powered by Industry-Leading Technologies</h3>
            <p className="text-sm text-blue-200/70 mt-2 max-w-2xl mx-auto">We integrate with the best tools and platforms to automate your marketing and streamline your workflows</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full overflow-hidden"
          >
            {/* First Slider */}
            <div className="slider mb-8">
              <div className="slide-track">
                {/* Map through tech partners */}
                {techPartners.map((partner, index) => (
                  <div className="slide" key={`partner-${index}`}>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="tech-logo-container">
                      <partner.icon className="h-10 w-10 text-gray-400 hover:text-white transition-colors duration-300" />
                      <span className="tech-logo-label">{partner.name}</span>
                    </a>
                  </div>
                ))}
                
                {/* Duplicate slides for seamless loop */}
                {techPartners.map((partner, index) => (
                  <div className="slide" key={`partner-duplicate-${index}`}>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="tech-logo-container">
                      <partner.icon className="h-10 w-10 text-gray-400 hover:text-white transition-colors duration-300" />
                      <span className="tech-logo-label">{partner.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Slider (Reverse Direction) */}
            <div className="slider slider-reverse">
              <div className="slide-track">
                {/* Map through second set of tech partners */}
                {techPartners2.map((partner, index) => (
                  <div className="slide" key={`partner2-${index}`}>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="tech-logo-container">
                      <partner.icon className="h-10 w-10 text-gray-400 hover:text-white transition-colors duration-300" />
                      <span className="tech-logo-label">{partner.name}</span>
                    </a>
                  </div>
                ))}
                
                {/* Duplicate slides for seamless loop */}
                {techPartners2.map((partner, index) => (
                  <div className="slide" key={`partner2-duplicate-${index}`}>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="tech-logo-container">
                      <partner.icon className="h-10 w-10 text-gray-400 hover:text-white transition-colors duration-300" />
                      <span className="tech-logo-label">{partner.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-blue-200/70">And many more automation, CRM, and marketing tools to power your business growth</p>
            <Link href="/integrations" className="inline-block mt-4 text-sm text-blue-300 hover:text-white transition-colors duration-300 underline">
              View all integrations →
            </Link>
          </motion.div>
        </div>
      </div>
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-x-3 group">
              <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                <div className="bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <Image
                    src="/static/images/sclogo.png"
                    alt="SpotCircuit"
                    width={40}
                    height={40}
                    className="h-10 w-10 transform transition-transform duration-500 group-hover:scale-110 brightness-200"
                  />
                </div>
              </div>
              <span className="text-xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">SpotCircuit</span>
            </div>
            <p className="text-base leading-6 text-blue-100 max-w-md">
              AI-powered SEO solutions that transform your online presence and drive qualified leads to your service business. We specialize in helping local service businesses dominate their market through intelligent automation and data-driven strategies.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Trusted by service businesses across:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">Plumbing</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">HVAC</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">Electrical</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">Landscaping</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">Roofing</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-blue-300 mb-3">Connect With Us</h4>
              <div className="flex space-x-5">
                {navigation.social.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-blue-200/70">Email: <a href="mailto:info@spotcircuit.com" className="hover:text-white transition-colors">info@spotcircuit.com</a></p>
                <p className="text-sm text-blue-200/70 mt-1">Phone: <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a></p>
                <p className="text-sm text-blue-200/70 mt-1">Hours: Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">Industries</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.industries.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                    >
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 mt-10 xl:mt-0">
              <div>
                <div className="space-y-6">
                  <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Ready to Grow?</h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-purple-500/40 transition-all duration-200"
                    >
                      <span className="flex items-center">
                        Get Your Free Growth Plan
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div>
                <div className="mt-0 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-200">Legal</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.legal.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                      >
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm leading-5 text-blue-200/70">
            &copy; {new Date().getFullYear()} SpotCircuit. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-sm leading-5 text-blue-200/70 hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</span>
            <span className="text-sm leading-5 text-blue-200/70 hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</span>
            <span className="text-sm leading-5 text-blue-200/70 hover:text-white transition-colors duration-200 cursor-pointer">Cookies</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
