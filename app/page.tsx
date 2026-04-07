import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SpotCircuit - Agentic AI Engineering',
  description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/',
  },
  openGraph: {
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
    url: 'https://www.spotcircuit.com/',
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship.',
    creator: '@spotcircuit',
  },
};

const services = [
  {
    title: 'Clarity Framework',
    description: 'Open-source agentic intelligence framework. Gives any engineer full project context on day one. Built on Karpathy\'s LLM Wiki pattern.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/clarity',
    tag: 'Open Source',
  },
  {
    title: 'AI Integration Consulting',
    description: 'Config-driven pipelines, API connectors, and workflow automation. We wire AI into your existing stack.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    href: '/services#integration',
    tag: '$150-250/hr',
  },
  {
    title: 'Claude Code Implementation',
    description: 'Custom skills, slash commands, memory systems, and MCP servers for your engineering team.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services#claude-code',
    tag: 'Teams',
  },
  {
    title: 'Knowledge Base Builder',
    description: 'The Karpathy wiki pattern as a service. Structured knowledge that compounds over time and makes your team smarter.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: '/services#knowledge-base',
    tag: 'Service',
  },
  {
    title: 'Document Processing Pipelines',
    description: 'Multi-format ingest with hybrid AI. PDFs, transcripts, web clips, Slack threads — structured and searchable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m3 0v3.375m0-3.375h3.375M6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    href: '/services#pipelines',
    tag: 'Data',
  },
  {
    title: 'Build in Public',
    description: 'Open source contributions, technical blog posts, and transparent engineering. Follow the journey.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    href: '/blog',
    tag: 'Community',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-mono text-sm sm:text-base mb-4 tracking-wide">AGENTIC AI ENGINEERING</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI systems that
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                think, learn, and ship
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We build agentic frameworks, implement Claude Code for engineering teams, and create knowledge systems that compound. From day-one context to self-improving pipelines.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                See What We Build
              </Link>
              <Link href="https://github.com/spotcircuit/clarity-framework" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 border border-gray-700">
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — 6 Revenue Streams */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Six ways we help engineering teams ship faster with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="bg-black rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full group hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded-full bg-gray-800 text-gray-400 group-hover:text-blue-400 transition-colors">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">How We Work</h2>

            <div className="space-y-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We audit your current stack, workflows, and pain points. Identify where agentic AI creates the most leverage.' },
                { step: '02', title: 'Architecture', desc: 'Design the system — framework selection, knowledge structure, pipeline topology, integration points.' },
                { step: '03', title: 'Build & Ship', desc: 'Implement iteratively. Working code in days, not months. Every deliverable is production-ready.' },
                { step: '04', title: 'Compound', desc: 'Your system gets smarter over time. Self-learn loops, wiki growth, observation validation. Knowledge compounds.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-mono text-sm font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to build?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you need a full framework implementation or just want to talk agentic AI — let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/clarity" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 border border-gray-700">
                Explore Clarity Framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
