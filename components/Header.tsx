'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Clarity Framework', href: '/clarity' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled
        ? 'bg-black/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
        : 'bg-black/70 backdrop-blur-lg'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 backdrop-filter backdrop-blur-md z-0"></div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link
            href="/"
            className="flex items-center gap-x-3 py-2 px-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
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
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-3 text-white bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 touch-manipulation"
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
            >
              <Link
                href={item.href}
                className={`relative inline-flex items-center px-4 py-2.5 text-sm font-semibold leading-6 rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-600/30 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'text-gray-200 hover:text-white hover:bg-white/5 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                {item.name}
              </Link>
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
            Let&apos;s Talk
            <span className="ml-2" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 z-50 bg-black/95 backdrop-blur-xl shadow-2xl border-t border-white/10"
            style={{ top: '72px' }}
          >
            <div className="px-5 pt-5 pb-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/10 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full rounded-xl px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
                >
                  Let&apos;s Talk
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}
