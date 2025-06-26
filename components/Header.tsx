'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Services', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Industries', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Solutions', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Resources', href: '#', isScroll: false, hasDropdown: true },
  { name: 'About', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Contact', href: '/contact', isScroll: false },
]

const servicesDropdown = [
  { name: 'AI-Powered SEO Services', href: '/services', description: 'LLM optimization for modern search' },
  { name: 'Local Business Marketing', href: '/local-services', description: 'Location-based visibility solutions' },
  { name: 'AI-Assisted Automation', href: '/services#automation', description: 'Smart workflows with n8n, Make, Clay & more' },
  { name: 'Custom AI Training', href: '/services#llm-training', description: 'Tailored language model training' },
  { name: 'Content Strategy & Creation', href: '/services#content', description: 'AI-enhanced content development' },
  { name: 'AI Conversion Optimization', href: '/services#conversion', description: 'Maximize lead generation & sales' },
  { name: 'Analytics & Reporting', href: '/services#analytics', description: 'Data-driven insights & metrics' },
  { name: 'AI Chatbot Development', href: '/services#chatbots', description: 'Custom conversational interfaces' },
]

const solutionsDropdown = [
  { name: 'AnswerCircuit', href: '/answercircuit', description: 'AI visibility optimization platform' },
  { name: 'AI Search Visibility Platform', href: '/seo2', description: 'Next-gen AI-powered search strategies' },
  { name: 'SpotCircuit Methodology', href: '/process', description: 'Our unique optimization approach' },
  { name: 'ClientCircuit', href: '/solutions/clientcircuit', description: 'Advanced client management platform' },
  { name: 'ContentCircuit', href: '/solutions/contentcircuit', description: 'AI-powered content generation' },
  { name: 'AnalyticsCircuit', href: '/solutions/analyticscircuit', description: 'Comprehensive analytics dashboard' },
  { name: 'ChatCircuit', href: '/solutions/chatcircuit', description: 'Enterprise chatbot solutions' },
]

const industriesDropdown = [
  { name: 'Industries Overview', href: '/industries', description: 'All industries we serve' },
  { name: 'Plumbing', href: '/industries/plumbing', description: 'AI marketing for plumbers' },
  { name: 'Recruiting', href: '/industries/recruiting', description: 'AI marketing for recruiters' },
  { name: 'Legal', href: '/industries/legal', description: 'AI marketing for lawyers' },
  { name: 'Medical', href: '/industries/medical', description: 'AI marketing for healthcare' },
  { name: 'Roofing', href: '/industries/roofing', description: 'AI marketing for roofers' },
]

const aboutDropdown = [
  { name: 'Case Studies', href: '/case-studies', description: 'Client success stories' },
  { name: 'Booking Calendar', href: '/booking', description: 'Schedule a consultation' },
]

const resourcesDropdown = [
  { name: 'Resources Hub', href: '/resources', description: 'All guides and tools' },
  { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
  { name: 'AI Search Optimization', href: '/resources/ai-search-optimization', description: 'Guide to AI-SEO' },
  { name: 'Local SEO Guide', href: '/resources/local-seo-guide', description: 'Dominate local search results' },
  { name: 'Technical SEO Checklist', href: '/resources/technical-seo-checklist', description: 'Technical audit guide' },
  { name: 'Content Strategy', href: '/resources/content-strategy-blueprint', description: 'Effective content creation' },
  { name: 'Analytics & Conversion', href: '/resources/analytics-conversion-guide', description: 'Measure and optimize results' },
  { name: 'AI Marketing Tools', href: '/resources/ai-marketing-tools', description: 'Curated AI tools directory' },
]

// Announcement Banner Component
function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 text-sm font-medium">
      <div className="relative inline-flex items-center">
        <span className="animate-pulse absolute -left-3 h-2 w-2 rounded-full bg-yellow-400"></span>
        <span className="ml-4">🚀 New: AI-Powered SEO Audits - </span>
        <Link href="/booking" className="ml-1 font-semibold underline hover:text-yellow-200 transition-colors">
          Book Your Free Strategy Session
        </Link>
        <span className="absolute -right-3 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  // Hide banner when scrolling down, show when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll: boolean) => {
    if (!isHomePage && href.startsWith('#')) {
      // If not on home page and it's a hash link, navigate to home with hash
      window.location.href = '/' + href
      return
    }

    if (isScroll && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
    setResourcesOpen(false)
    setSolutionsOpen(false)
    setServicesOpen(false)
    setIndustriesOpen(false)
    setAboutOpen(false)
  }

  return (
    <>
      {showBanner && <AnnouncementBanner />}
      <header className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] py-0' 
          : 'bg-black/60 backdrop-blur-lg py-2'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 backdrop-filter backdrop-blur-md z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-purple-500/5 z-0"></div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <div className="relative">
            <Link 
              href="/" 
              className="flex items-center gap-x-3 py-2 px-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors duration-200 relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="sr-only">SpotCircuit</span>
              <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
                <div className="bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <Image
                    src="/static/images/sclogo.png"
                    alt="SpotCircuit"
                    width={40}
                    height={40}
                    className="h-10 w-10 transform transition-transform duration-500 hover:scale-110 brightness-200"
                  />
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300">
                SpotCircuit
              </span>
            </Link>
            {/* Invisible clickable overlay */}
            <a 
              href="/" 
              className="absolute inset-0 z-20 w-full h-full opacity-0"
              aria-hidden="true"
              onClick={(e) => e.preventDefault()}
            />
          </div>
        </motion.div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-white bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex lg:gap-x-2 xl:gap-x-3"
        >
          {navigation.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              className="relative group"
            >
              {item.hasDropdown ? (
                <button
                  className={`text-sm font-semibold leading-6 px-4 py-2.5 rounded-lg transition-all duration-300 relative flex items-center gap-1.5 group-hover:bg-white/5 group-hover:shadow-lg group-hover:shadow-blue-500/10 ${
                    pathname?.startsWith(item.href) 
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-600/30 border border-blue-500/30 shadow-lg shadow-blue-500/10' 
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                  onMouseEnter={() => {
                    setActiveItem(item.name)
                    // Close other dropdowns when hovering over a new item
                    setServicesOpen(item.name === 'Services')
                    setIndustriesOpen(item.name === 'Industries')
                    setSolutionsOpen(item.name === 'Solutions')
                    setResourcesOpen(item.name === 'Resources')
                    setAboutOpen(item.name === 'About')
                  }}
                  onClick={() => {
                    if (item.name === 'Services') setServicesOpen(!servicesOpen)
                    else if (item.name === 'Industries') setIndustriesOpen(!industriesOpen)
                    else if (item.name === 'Solutions') setSolutionsOpen(!solutionsOpen)
                    else if (item.name === 'Resources') setResourcesOpen(!resourcesOpen)
                    else if (item.name === 'About') setAboutOpen(!aboutOpen)
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <ChevronDownIcon 
                    className={`ml-0.5 h-4 w-4 transition-transform duration-200 ${
                      (item.name === 'Services' && servicesOpen) || 
                      (item.name === 'Industries' && industriesOpen) || 
                      (item.name === 'Solutions' && solutionsOpen) || 
                      (item.name === 'Resources' && resourcesOpen) || 
                      (item.name === 'About' && aboutOpen) 
                        ? 'rotate-180' : ''
                    }`} 
                  />
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 transform -translate-x-1/2 ${
                    activeItem === item.name || pathname?.startsWith(item.href) ? 'w-4/5' : 'w-0'
                  }`}></span>
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                  className={`relative group inline-flex items-center px-4 py-2.5 text-sm font-semibold leading-6 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-600/30 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/5 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeItem === item.name || pathname === item.href ? 'w-full' : 'w-0'
                  }`} />
                </a>
              )}
              {item.name === 'Services' && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {servicesDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
              {item.name === 'Industries' && (
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {industriesDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIndustriesOpen(false)}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
              {item.name === 'Solutions' && (
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {solutionsDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
              {item.name === 'About' && (
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {aboutDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setAboutOpen(false)}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
              {item.name === 'Resources' && (
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {resourcesDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link
            href="/booking"
            className="text-sm font-semibold leading-6 text-white px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
          >
            Book Demo
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden absolute top-16 inset-x-0 z-40 bg-black/80 backdrop-blur-lg shadow-xl mx-4 rounded-2xl border border-white/10"
          >
            <div className="px-5 pt-5 pb-6 space-y-3">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === 'Services') setServicesOpen(!servicesOpen);
                          else if (item.name === 'Industries') setIndustriesOpen(!industriesOpen);
                          else if (item.name === 'Solutions') setSolutionsOpen(!solutionsOpen);
                          else if (item.name === 'Resources') setResourcesOpen(!resourcesOpen);
                          else if (item.name === 'About') setAboutOpen(!aboutOpen);
                        }}
                        className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/10 transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesOpen) ||
                            (item.name === 'Industries' && industriesOpen) ||
                            (item.name === 'Solutions' && solutionsOpen) ||
                            (item.name === 'Resources' && resourcesOpen) ||
                            (item.name === 'About' && aboutOpen)
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {((item.name === 'Services' && servicesOpen) ||
                          (item.name === 'Industries' && industriesOpen) ||
                          (item.name === 'Solutions' && solutionsOpen) ||
                          (item.name === 'Resources' && resourcesOpen) ||
                          (item.name === 'About' && aboutOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="mt-1 space-y-1 pl-4 border-l border-white/10"
                          >
                            {(item.name === 'Services' ? servicesDropdown : 
                              item.name === 'Industries' ? industriesDropdown : 
                              item.name === 'Solutions' ? solutionsDropdown : 
                              item.name === 'About' ? aboutDropdown : 
                              resourcesDropdown).map(
                              (subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={(e) => handleNavigation(e, subItem.href, false)}
                                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              )
                            )}
                            {item.name === 'Resources' && (
                               <Link
                                href="/resources"
                                onClick={(e) => handleNavigation(e, "/resources", false)}
                                className="block rounded-md px-3 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
                              >
                                View All Resources →
                              </Link>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/booking"
                  onClick={(e) => handleNavigation(e, "/booking", false)}
                  className="flex items-center justify-center w-full rounded-xl px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
                >
                  Book Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="rounded-full p-2 text-white bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  )
}