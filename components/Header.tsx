'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'The Problem', href: '#problem-section', isScroll: true },
  { name: 'Results', href: '#real-results', isScroll: true },
  { name: 'How It Works', href: '#six-steps', isScroll: true },
  { name: 'Case Studies', href: '#case-studies', isScroll: true },
  { name: 'Blog', href: '/blog', isScroll: false },
  { name: 'FAQ', href: '#faq-section', isScroll: true },
  { name: 'Contact', href: '#book-demo', isScroll: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <span className="sr-only">SpotCircuit</span>
            <Image
              src="/static/images/sclogo.png"
              alt="SpotCircuit"
              width={40}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-xl font-bold text-white">SpotCircuit</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => item.isScroll ? scrollToSection(e, item.href) : setMobileMenuOpen(false)}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#book-demo"
            className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
          >
            Book a Call <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[150]">
          <div className="fixed inset-0 bg-black/80" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[200] w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
                <span className="sr-only">SpotCircuit</span>
                <Image
                  src="/static/images/sclogo.png"
                  alt="SpotCircuit"
                  width={40}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
                <span className="text-xl font-bold text-white">SpotCircuit</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => item.isScroll ? scrollToSection(e, item.href) : setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#book-demo"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
