'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButton {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundImage?: string;
  className?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA = { text: 'Get Started', href: '/booking' },
  secondaryCTA,
  backgroundImage,
  className = ''
}: HeroProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-black ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-500 to-green-900 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="rgba(255, 255, 255, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-500 ring-1 ring-inset ring-green-500/20">
                  Latest Update
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>Just shipped v1.0</span>
                  <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-2xl font-semibold text-gray-200"
            >
              {subtitle}
            </motion.h2>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href={primaryCTA.href}
              className="rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors">
                {secondaryCTA.text} <span aria-hidden="true">→</span>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <div className="relative w-full h-[20rem] sm:h-[25rem] lg:w-[40rem] lg:h-[35rem]">
              {/* Main Hero Image */}
              {backgroundImage && (
                <Image
                  src={backgroundImage}
                  alt={title}
                  fill
                  className="relative rounded-xl bg-transparent shadow-xl ring-1 ring-white/10 object-contain"
                  style={{ 
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.2) contrast(1.1)'
                  }}
                  priority
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Default export for backward compatibility
export default Hero;
