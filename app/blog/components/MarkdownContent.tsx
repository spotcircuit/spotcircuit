'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ReactMarkdownProps {
  node?: any;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  src?: string;
  alt?: string;
  inline?: boolean;
}

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
      components={{
        h1: ({ node, ...props }: ReactMarkdownProps) => (
          <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />
        ),
        h2: ({ node, ...props }: ReactMarkdownProps) => (
          <h2 className="text-2xl font-bold mt-8 mb-4 text-white" {...props} />
        ),
        h3: ({ node, ...props }: ReactMarkdownProps) => (
          <h3 className="text-xl font-bold mt-6 mb-3 text-white" {...props} />
        ),
        p: ({ node, ...props }: ReactMarkdownProps) => (
          <p className="mb-4 text-gray-300" {...props} />
        ),
        a: ({ node, href, ...props }: ReactMarkdownProps) => 
          href?.startsWith('/') || href?.startsWith('#') ? (
            <Link href={href} className="text-blue-400 hover:text-blue-300 transition-colors" {...props} />
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors" {...props} />
          ),
        ul: ({ node, ...props }: ReactMarkdownProps) => (
          <ul className="list-disc ml-6 mb-6 text-gray-300" {...props} />
        ),
        ol: ({ node, ...props }: ReactMarkdownProps) => (
          <ol className="list-decimal ml-6 mb-6 text-gray-300" {...props} />
        ),
        li: ({ node, ...props }: ReactMarkdownProps) => (
          <li className="mb-2" {...props} />
        ),
        blockquote: ({ node, ...props }: ReactMarkdownProps) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 text-gray-400 italic" {...props} />
        ),
        img: ({ node, src, alt, ...props }: ReactMarkdownProps) => (
          <div className="my-6">
            {src && (
              <Image
                src={src}
                alt={alt || ''}
                width={800}
                height={400}
                className="rounded-lg"
              />
            )}
            {alt && <p className="text-sm text-gray-400 mt-2 text-center">{alt}</p>}
          </div>
        ),
        code: ({ node, inline, className, children, ...props }: ReactMarkdownProps) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={dracula}
              language={match[1]}
              PreTag="div"
              className="rounded-md my-4"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
              {children}
            </code>
          );
        },
        hr: ({ node, ...props }: ReactMarkdownProps) => (
          <hr className="my-8 border-gray-700" {...props} />
        ),
        table: ({ node, ...props }: ReactMarkdownProps) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-700" {...props} />
          </div>
        ),
        thead: ({ node, ...props }: ReactMarkdownProps) => (
          <thead className="bg-gray-800" {...props} />
        ),
        th: ({ node, ...props }: ReactMarkdownProps) => (
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" {...props} />
        ),
        td: ({ node, ...props }: ReactMarkdownProps) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
