"use client";

import type { Metadata } from 'next';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaSearch, 
  FaBriefcase, 
  FaUsers, 
  FaLayerGroup, 
  FaBook, 
  FaRocket, 
  FaTools, 
  FaChartLine, 
  FaRobot, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaComments, 
  FaQuestion, 
  FaShieldAlt, 
  FaLock, 
  FaCookieBite, 
  FaUniversalAccess,
  FaSitemap
} from 'react-icons/fa';

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: {
    title: string;
    url: string;
    description?: string;
    isNew?: boolean;
  }[];
}

const VisualSitemap: React.FC = () => {
  const sitemapData: SitemapSection[] = [
    {
      title: "Main Pages",
      icon: <FaHome className="text-blue-500" />,
      links: [
        { 
          title: "Home", 
          url: "/", 
          description: "AI-First SEO & LLM Optimization Platform" 
        },
        { 
          title: "SEO 2.0", 
          url: "/seo2", 
          description: "Next-generation AI-powered SEO strategies" 
        },
        { 
          title: "Services", 
          url: "/services", 
          description: "Our service offerings and packages" 
        },
        { 
          title: "Process", 
          url: "/process", 
          description: "How we work with clients to deliver results" 
        },
        { 
          title: "Contact", 
          url: "/contact", 
          description: "Get in touch with our team" 
        }
      ]
    },
    {
      title: "Industries",
      icon: <FaBriefcase className="text-green-500" />,
      links: [
        { 
          title: "Industries Overview", 
          url: "/industries", 
          description: "Specialized solutions for different sectors" 
        },
        { 
          title: "HVAC", 
          url: "/industries/hvac", 
          description: "SEO & marketing for HVAC businesses" 
        },
        { 
          title: "Plumbing", 
          url: "/industries/plumbing", 
          description: "SEO & marketing for plumbing companies" 
        },
        { 
          title: "Electrical", 
          url: "/industries/electrical", 
          description: "SEO & marketing for electrical contractors" 
        },
        { 
          title: "Roofing", 
          url: "/industries/roofing", 
          description: "SEO & marketing for roofing companies" 
        },
        { 
          title: "Landscaping", 
          url: "/industries/landscaping", 
          description: "SEO & marketing for landscaping businesses" 
        }
      ]
    },
    {
      title: "Resources",
      icon: <FaBook className="text-purple-500" />,
      links: [
        { 
          title: "Resources Hub", 
          url: "/resources", 
          description: "All guides, templates and tools" 
        },
        { 
          title: "AI Search Optimization", 
          url: "/resources/ai-search-optimization", 
          description: "Guide to optimizing for AI search engines" 
        },
        { 
          title: "Local SEO Guide", 
          url: "/resources/local-seo-guide", 
          description: "Dominate local search results" 
        },
        { 
          title: "Technical SEO Checklist", 
          url: "/resources/technical-seo-checklist", 
          description: "Complete technical audit guide" 
        },
        { 
          title: "Content Strategy Blueprint", 
          url: "/resources/content-strategy-blueprint", 
          description: "Create content that drives results", 
          isNew: true 
        },
        { 
          title: "Analytics & Conversion Guide", 
          url: "/resources/analytics-conversion-guide", 
          description: "Measure and optimize performance", 
          isNew: true 
        },
        { 
          title: "AI Marketing Tools Directory", 
          url: "/resources/ai-marketing-tools", 
          description: "Curated collection of AI tools", 
          isNew: true 
        }
      ]
    },
    {
      title: "Products",
      icon: <FaRocket className="text-red-500" />,
      links: [
        { 
          title: "AnswerCircuit", 
          url: "/answercircuit", 
          description: "AI visibility optimization platform" 
        },
        { 
          title: "Launch", 
          url: "/launch", 
          description: "AI-First SEO launch platform" 
        }
      ]
    },
    {
      title: "Company",
      icon: <FaUsers className="text-yellow-500" />,
      links: [
        { 
          title: "Case Studies", 
          url: "/case-studies", 
          description: "Client success stories" 
        },
        { 
          title: "Blog", 
          url: "/blog", 
          description: "Latest insights, trends and guides" 
        },
        { 
          title: "Booking", 
          url: "/booking", 
          description: "Schedule a meeting with our team" 
        }
      ]
    },
    {
      title: "Legal Pages",
      icon: <FaShieldAlt className="text-gray-500" />,
      links: [
        { 
          title: "Privacy Policy", 
          url: "/privacy", 
          description: "How we handle your data" 
        },
        { 
          title: "Terms of Service", 
          url: "/terms", 
          description: "Terms and conditions" 
        },
        { 
          title: "Cookie Policy", 
          url: "/cookies", 
          description: "Cookie usage information" 
        },
        { 
          title: "Accessibility", 
          url: "/accessibility", 
          description: "Accessibility statement" 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Structured data - WebPage Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Site Map - SpotCircuit",
            "description": "Complete visual site map of the SpotCircuit website with links to all pages organized by category.",
            "url": "https://www.spotcircuit.com/sitemap-visual",
            "publisher": {
              "@type": "Organization",
              "name": "SpotCircuit",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.spotcircuit.com/static/images/logo.png"
              }
            }
          })
        }}
      />

      <main className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-4">
                <FaSitemap className="h-10 w-10 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Site Map
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find what you're looking for with our complete visual site map. All pages are organized by category for easy navigation.
              </p>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12">
              {sitemapData.map((section, sectionIndex) => (
                <motion.div 
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-black/30 mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.div
                        key={link.url}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      >
                        <Link 
                          href={link.url}
                          className="block h-full bg-black/30 hover:bg-black/50 border border-gray-700 hover:border-blue-500/50 rounded-xl p-4 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-400">{link.title}</h3>
                            {link.isNew && (
                              <span className="bg-blue-600/30 text-blue-300 text-xs px-2 py-0.5 rounded-full border border-blue-500/30">
                                New
                              </span>
                            )}
                          </div>
                          {link.description && (
                            <p className="text-sm text-gray-400">{link.description}</p>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* XML Sitemap Link */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                Looking for the XML sitemap for SEO purposes?
              </p>
              <a 
                href="/sitemap.xml" 
                target="_blank"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <FaSearch className="mr-2" />
                View XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default VisualSitemap;