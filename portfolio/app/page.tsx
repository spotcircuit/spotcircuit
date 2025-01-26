'use client';

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <About />
            <Projects />
          </div>
        </div>
        <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Experience />
        </div>
        <Contact />
      </main>
    </>
  )
}
