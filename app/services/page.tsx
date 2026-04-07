import Link from 'next/link';

const services = [
  {
    id: 'framework',
    title: 'Clarity Framework',
    subtitle: 'Open Source + Enterprise Support',
    description: 'An agentic intelligence framework for technical engagements. Built on Karpathy\'s LLM Wiki pattern, extended with structured operational data and behavioral memory.',
    features: [
      'Self-learn loop — observations auto-validate and promote into structured knowledge',
      'Wiki system with Obsidian-compatible cross-linking',
      '9 slash commands for SE workflows (discover, brief, check, self-improve)',
      '6 reusable engineering patterns (correlationId, idempotency, error handling)',
      'Client templates with expertise.yaml, phase-0 docs, and note-taking',
      'Three knowledge systems: operational YAML, behavioral memory, durable wiki',
    ],
    cta: { label: 'View on GitHub', href: 'https://github.com/spotcircuit/clarity-framework' },
    tag: 'Open Source',
  },
  {
    id: 'integration',
    title: 'AI Integration Consulting',
    subtitle: '$150-250/hr',
    description: 'We wire AI into your existing stack. Config-driven pipelines, API connectors, workflow automation with n8n/Make/Zapier, and custom integrations that actually work in production.',
    features: [
      'Config-driven pipeline architecture — swap providers without code changes',
      'API connector development for any service (REST, GraphQL, webhooks)',
      'Workflow automation (n8n, Make, Zapier) with error handling and retry logic',
      'Data transformation and enrichment pipelines',
      'Production monitoring and alerting setup',
      'Migration from manual processes to automated workflows',
    ],
    cta: { label: 'Get in Touch', href: '/contact' },
    tag: 'Consulting',
  },
  {
    id: 'claude-code',
    title: 'Claude Code Implementation',
    subtitle: 'For Engineering Teams',
    description: 'Custom Claude Code setups for your team. Skills, slash commands, memory systems, MCP servers, and hooks that make your engineers 10x more effective with AI.',
    features: [
      'Custom slash commands tailored to your codebase and workflows',
      'Memory systems that persist context across sessions',
      'MCP server integration for your internal tools and APIs',
      'Hook configurations for automated quality checks',
      'Team onboarding and training on agentic development',
      'CLAUDE.md architecture for project-specific AI behavior',
    ],
    cta: { label: 'Get in Touch', href: '/contact' },
    tag: 'Teams',
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base Builder',
    subtitle: 'The Karpathy Wiki Pattern as a Service',
    description: 'Structured knowledge that compounds over time. We build wiki systems that make your team smarter with every interaction — from intake to synthesis to retrieval.',
    features: [
      'Obsidian-compatible wiki with cross-linking and tagging',
      'Raw file intake pipeline (web clips, transcripts, PDFs, Slack threads)',
      'Auto-generated index with per-page summaries for LLM navigation',
      'Processing log for audit trail and traceability',
      'Health checks: orphan detection, broken links, stale content alerts',
      'Query-to-wiki loop — good answers get filed as permanent knowledge',
    ],
    cta: { label: 'Get in Touch', href: '/contact' },
    tag: 'Service',
  },
  {
    id: 'pipelines',
    title: 'Document Processing Pipelines',
    subtitle: 'Multi-Format Ingest, Hybrid AI',
    description: 'Turn unstructured documents into structured, searchable knowledge. PDFs, meeting transcripts, web clips, email threads — all normalized and connected.',
    features: [
      'Multi-format ingest (PDF, DOCX, HTML, Markdown, plain text, images)',
      'Hybrid AI approach — use the right model for each task',
      'Entity extraction and relationship mapping',
      'Structured output with consistent schemas',
      'Integration with existing search and retrieval systems',
      'Processing pipeline with retry logic and error recovery',
    ],
    cta: { label: 'Get in Touch', href: '/contact' },
    tag: 'Data',
  },
  {
    id: 'public',
    title: 'Build in Public',
    subtitle: 'Open Source, Blog, Community',
    description: 'We share everything we learn. Open source contributions, technical blog posts, and transparent engineering. Follow the journey and learn alongside us.',
    features: [
      'Open source framework development on GitHub',
      'Technical blog posts on agentic AI patterns',
      'Walkthroughs of real implementation sessions',
      'Community contributions and pattern sharing',
      'Conference talks and workshop materials',
      'Weekly progress updates and learning logs',
    ],
    cta: { label: 'Read the Blog', href: '/blog' },
    tag: 'Community',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-400 font-mono text-sm mb-4">WHAT WE BUILD</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Services</h1>
          <p className="text-gray-400 text-lg">
            Six ways we help engineering teams ship faster with agentic AI. From open-source frameworks to hands-on implementation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {service.tag}
                    </span>
                    <span className="text-sm text-gray-500">{service.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    {service.cta.label}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < services.length - 1 && (
                <div className="border-t border-gray-800 mt-16"></div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let&apos;s build something</h2>
          <p className="text-gray-400 mb-8">
            Every engagement starts with a conversation. Tell us what you&apos;re building.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
