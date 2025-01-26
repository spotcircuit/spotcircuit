'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div id="resume" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Resume</h2>
          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
            <iframe
              src="/static/BrianPyattResume2025.pdf"
              className="h-full w-full"
              style={{ minHeight: '800px' }}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="/static/BrianPyattResume2025.pdf"
              download
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
