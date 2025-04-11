'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'SEO 2.0', href: '/seo2', isScroll: false },
  { name: 'Services', href: '/services', isScroll: false },
  { name: 'Process', href: '/process', isScroll: false },
  { name: 'Case Studies', href: '/case-studies', isScroll: false },
  { name: 'Blog', href: '/blog', isScroll: false },
  { name: 'Contact', href: '/contact', isScroll: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('')
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex lg:gap-x-1"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="relative px-1"
              onHoverStart={() => setActiveItem(item.name)}
              onHoverEnd={() => setActiveItem('')}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                className="relative z-10 px-4 py-2 rounded-full text-sm font-medium text-white hover:text-white transition-all duration-300 inline-block"
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.span 
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
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
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"></span>
            <span className="relative flex items-center">Book Demo <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
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
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
                  >
                    {item.name}
                  </a>
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
