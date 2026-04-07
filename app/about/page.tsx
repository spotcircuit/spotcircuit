import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - SpotCircuit | Agentic AI Engineering',
  description: 'SpotCircuit builds agentic AI systems for engineering teams. Founded by Brian Pyatt, an agentic AI engineer focused on frameworks, knowledge systems, and Claude Code.',
  alternates: { canonical: 'https://www.spotcircuit.com/about' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm mb-4">ABOUT</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Building the future of agentic AI</h1>
            <p className="text-gray-400 text-lg">
              SpotCircuit is an agentic AI engineering practice founded by Brian Pyatt.
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I spent years in solution engineering — the space between sales and engineering where you need to understand a client&apos;s entire technical landscape in days, not months. The problem was always the same: context. Every new engagement started from zero.
              </p>
              <p>
                When Andrej Karpathy described his LLM Wiki pattern — structured knowledge that an AI reads before answering — I saw the solution. But a wiki alone wasn&apos;t enough. You need operational data (what&apos;s the project state right now?), behavioral rules (how does this team prefer to work?), and a self-learn loop that validates what you think you know against reality.
              </p>
              <p>
                That became <Link href="/clarity" className="text-blue-400 hover:text-blue-300">Clarity Framework</Link> — an open-source agentic intelligence framework that gives any engineer full project context on day one and grows smarter throughout the engagement.
              </p>
              <p>
                Now I help engineering teams implement these patterns. Whether it&apos;s setting up Claude Code with custom skills and memory, building knowledge bases that compound, or designing document processing pipelines — the goal is always the same: make your team smarter with every interaction.
              </p>
            </div>
          </div>

          {/* What I Believe */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What I believe</h2>
            <div className="space-y-6">
              {[
                { title: 'Knowledge should compound', desc: 'Every question answered, every problem solved, every decision made should make the next one easier. Systems that forget are systems that fail.' },
                { title: 'Context is everything', desc: 'The difference between a useful AI and a useless one is context. The right framework turns an LLM from a parlor trick into a real engineering tool.' },
                { title: 'Ship, then improve', desc: 'Working code in days, not months. Every deliverable is production-ready. Perfectionism is the enemy of compounding.' },
                { title: 'Build in the open', desc: 'The best way to learn is to share. Open source, technical blog posts, transparent engineering. The community makes everything better.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="bg-gray-950 rounded-xl p-8 border border-gray-800">
            <h2 className="text-xl font-bold mb-6">Connect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/spotcircuit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/company/spotcircuit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.76-1.38-1.76-.74 0-1.62.44-1.62 1.72V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.4.86 3.4 4.2z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://twitter.com/spotcircuit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </a>
              <Link href="/contact" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
