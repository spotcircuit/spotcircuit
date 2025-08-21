import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnswerCircuit - Stop Losing Deals to AI Invisibility | For B2B SaaS',
  description: 'Your competitors are getting cited by ChatGPT while you rank #1 on Google. Get AI visibility in 90 days or we work free. For B2B SaaS $15M-$30M ARR.',
  keywords: 'AI SEO for SaaS, ChatGPT optimization, Claude optimization, B2B SaaS AI visibility, AI search optimization, LLM optimization for SaaS',
  openGraph: {
    title: 'Your Competitors Are Getting All The AI Mentions - AnswerCircuit',
    description: 'While you rank #1 on Google, ChatGPT recommends them. Stop losing 10-15 qualified demos every month.',
    type: 'website',
    url: 'https://www.spotcircuit.com/answercircuit',
    images: [{
      url: '/static/images/ai-visibility-audit-og.png',
      width: 1200,
      height: 630,
      alt: 'AnswerCircuit - AI Visibility for B2B SaaS'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Losing Deals to AI Invisibility',
    description: 'Get cited by ChatGPT, Claude & Perplexity in 90 days or we work free.',
    images: ['/static/images/ai-visibility-audit-og.png'],
  },
  alternates: {
    canonical: '/answercircuit',
    languages: {
      'x-default': '/answercircuit',
      'en': '/answercircuit',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};