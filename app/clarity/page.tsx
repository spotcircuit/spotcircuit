import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarity Framework - Agentic Intelligence | SpotCircuit',
  description: 'Open-source agentic intelligence framework based on Karpathy\'s LLM Wiki pattern. Self-learn loops, structured knowledge, and SE workflow automation.',
  alternates: { canonical: 'https://www.spotcircuit.com/clarity' },
};

export default function ClarityPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-green-400 text-sm font-mono">Open Source</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Clarity Framework
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            An agentic intelligence framework for technical engagements. Gives any engineer full project context on day one and grows smarter throughout the engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://github.com/spotcircuit/clarity-framework" className="inline-flex items-center justify-center bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Link>
            <Link href="/services" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition border border-gray-700">
              See All Services
            </Link>
          </div>
        </div>

        {/* Based On */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-xl font-bold mb-3">Built on Karpathy&apos;s LLM Wiki Pattern</h2>
            <p className="text-gray-300 leading-relaxed">
              Andrej Karpathy proposed that the best way to use LLMs is to build a personal wiki — structured knowledge that the model reads before answering. Clarity extends this pattern with structured operational data (expertise.yaml), behavioral memory (Claude&apos;s auto-memory), and a self-learn loop that validates observations against live state.
            </p>
          </div>
        </div>

        {/* Three Knowledge Systems */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Three Knowledge Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
              <div className="text-blue-400 font-mono text-sm mb-2">expertise.yaml</div>
              <h3 className="text-lg font-bold mb-2">Operational Data</h3>
              <p className="text-gray-400 text-sm">Project state, API gotchas, results, configuration. Structured YAML updated by /se:* commands. The agent&apos;s persistent brain — capped at 1000 lines.</p>
            </div>
            <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
              <div className="text-purple-400 font-mono text-sm mb-2">.claude/memory/</div>
              <h3 className="text-lg font-bold mb-2">Behavioral Rules</h3>
              <p className="text-gray-400 text-sm">User preferences, guardrails, process rules. Markdown with frontmatter, auto-managed by Claude. Persists across conversations.</p>
            </div>
            <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
              <div className="text-green-400 font-mono text-sm mb-2">wiki/</div>
              <h3 className="text-lg font-bold mb-2">Durable Knowledge</h3>
              <p className="text-gray-400 text-sm">Synthesized patterns, decisions, people, concepts. Obsidian-compatible markdown with [[wiki links]]. Updated by /se:wiki-* commands.</p>
            </div>
          </div>
        </div>

        {/* Commands */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">9 SE Commands</h2>
          <div className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-6 text-blue-400 font-mono">Command</th>
                    <th className="text-left py-3 px-6 text-gray-400">What It Does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    ['/se:create', 'Create a new client with config files'],
                    ['/se:discover', 'Phase 0 auto-generation, seeds expertise.yaml'],
                    ['/se:brief', 'Standup/handoff summary from expertise.yaml'],
                    ['/se:self-improve', 'Validate observations, integrate confirmed facts'],
                    ['/se:check', 'Design guidelines compliance check'],
                    ['/se:wiki-ingest', 'Process raw/ files into wiki pages'],
                    ['/se:wiki-file', 'File a conversation insight as wiki page'],
                    ['/se:wiki-lint', 'Health check: orphans, broken links, stale pages'],
                    ['/se:meeting', 'Ingest meeting notes into notes.md and expertise.yaml'],
                  ].map(([cmd, desc]) => (
                    <tr key={cmd}>
                      <td className="py-3 px-6 font-mono text-white">{cmd}</td>
                      <td className="py-3 px-6 text-gray-400">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Self-Learn Loop */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">The Self-Learn Loop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Observe', desc: 'Every /se:* command appends raw observations to unvalidated_observations' },
              { step: '2', title: 'Validate', desc: '/se:self-improve checks each observation against current live state' },
              { step: '3', title: 'Promote', desc: 'Confirmed facts get promoted into the relevant expertise section' },
              { step: '4', title: 'Compound', desc: 'Knowledge grows and compresses. The system gets smarter with every session' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-950 rounded-xl p-5 border border-gray-800 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 font-mono text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want us to set it up for you?</h2>
          <p className="text-gray-400 mb-8">
            We implement Clarity for teams — custom client templates, wiki seeding, command tuning, and training.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
