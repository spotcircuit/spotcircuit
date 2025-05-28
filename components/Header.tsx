'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Solutions', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Company', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Resources', href: '#', isScroll: false, hasDropdown: true },
  { name: 'Contact', href: '/contact', isScroll: false },
]

const solutionsDropdown = [
  { name: 'SEO 2.0', href: '/seo2', description: 'Next-gen AI-powered SEO strategies' },
  { name: 'AnswerCircuit', href: '/answercircuit', description: 'AI visibility optimization platform' },
  { name: 'Services', href: '/services', description: 'Full-service AI-SEO solutions' },
]

const companyDropdown = [
  { name: 'Industries', href: '/industries', description: 'Specialized industry expertise' },
  { name: 'Process', href: '/process', description: 'How we deliver results' },
  { name: 'Case Studies', href: '/case-studies', description: 'Client success stories' },
  { name: 'Blog', href: '/blog', description: 'Latest insights and trends' },
]

const resourcesDropdown = [
  { name: 'Complete AI Search Guide', href: '/resources/ai-search-optimization', description: 'Comprehensive guide to AI-SEO' },
  { name: 'Why Traditional SEO is Failing', href: '/resources/ai-search-optimization#traditional-seo', description: 'Understanding the shift' },
  { name: 'Evolution of Search', href: '/resources/ai-search-optimization#evolution', description: 'SEO → AEO → AIO → LLMO → GEO' },
  { name: 'AI Search Behavior', href: '/resources/ai-search-optimization#ai-behavior', description: 'How AI systems work' },
  { name: 'Content Formats', href: '/resources/ai-search-optimization#content-formats', description: 'What content wins in AI' },
  { name: 'Implementation Guide', href: '/resources/ai-search-optimization#implementation', description: 'Step-by-step optimization' },
  { name: 'Schema Markup Examples', href: '/resources/ai-search-optimization#schema', description: 'Technical implementation' },
  { name: 'Measuring Success', href: '/resources/ai-search-optimization#measurement', description: 'KPIs and tracking' },
  { name: 'Tools & Resources', href: '/resources/ai-search-optimization#tools', description: 'Essential AI-SEO tools' },
  { name: 'FAQs', href: '/resources/ai-search-optimization#faqs', description: 'Common questions answered' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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
    setCompanyOpen(false)
  }

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-black/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-filter backdrop-blur-sm z-[-1]"></div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-3 group">
            <span className="sr-only">SpotCircuit</span>
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
            <span className="text-white font-bold text-xl tracking-tight group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">SpotCircuit</span>
          </Link>
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
          className="hidden lg:flex lg:gap-x-6 xl:gap-x-8"
        >
          {navigation.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              {item.hasDropdown ? (
                <button
                  className={`text-sm font-medium leading-6 px-3 py-2 rounded-lg transition-all duration-300 relative group flex items-center ${
                    pathname?.startsWith(item.href) 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30' 
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem('')}
                  onClick={() => {
                    if (item.name === 'Solutions') {
                      setSolutionsOpen(!solutionsOpen)
                    } else if (item.name === 'Company') {
                      setCompanyOpen(!companyOpen)
                    } else if (item.name === 'Resources') {
                      setResourcesOpen(!resourcesOpen)
                    }
                  }}
                >
                  {item.name}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${solutionsOpen || companyOpen || resourcesOpen ? 'rotate-180' : ''}`} />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeItem === item.name || pathname?.startsWith(item.href) ? 'w-full' : 'w-0'
                  }`} />
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                  className={`text-sm font-medium leading-6 px-3 py-2 rounded-lg transition-all duration-300 relative group flex items-center ${
                    pathname === item.href 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30' 
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
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
              {item.name === 'Company' && (
                <AnimatePresence>
                  {companyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-4 z-50"
                    >
                      <div className="space-y-1">
                        {companyDropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setCompanyOpen(false)}
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
            href="/contact"
            className="text-sm font-semibold leading-6 text-white px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
          >
            Book Demo
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </nav>
      
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? '' : 'pointer-events-none'}`}
      >
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <motion.div 
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-blue-900/90 to-black/90 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-x-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">SpotCircuit</span>
              <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80">
                <div className="bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <Image
                    src="/static/images/sclogo.png"
                    alt="SpotCircuit"
                    width={32}
                    height={32}
                    className="h-8 w-8 brightness-200"
                  />
                </div>
              </div>
              <span className="text-white font-bold text-lg">SpotCircuit</span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-white bg-white/10 hover:bg-white/20 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <button
                      className="block rounded-xl px-4 py-3 text-base font-medium text-white bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                      onClick={() => {
                        if (item.name === 'Solutions') {
                          setSolutionsOpen(!solutionsOpen)
                        } else if (item.name === 'Company') {
                          setCompanyOpen(!companyOpen)
                        } else if (item.name === 'Resources') {
                          setResourcesOpen(!resourcesOpen)
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${solutionsOpen || companyOpen || resourcesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-white bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                    >
                      {item.name}
                    </a>
                  )}
                  {item.name === 'Solutions' && (
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2"
                        >
                          {solutionsDropdown.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-300 bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                            >
                              <div className="font-medium text-white">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  {item.name === 'Company' && (
                    <AnimatePresence>
                      {companyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2"
                        >
                          {companyDropdown.map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setCompanyOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-300 bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                            >
                              <div className="font-medium text-white">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          ))}
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
                          className="space-y-2"
                        >
                          {resourcesDropdown.slice(0, 5).map((item, index) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-300 bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                            >
                              <div className="font-medium text-white">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          ))}
                          <Link
                            href="/resources/ai-search-optimization"
                            onClick={() => setResourcesOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-center text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Complete Guide →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-xl px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
                >
                  Book Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}
