'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:novahokie1998@gmail.com?subject=Portfolio Contact';
  };

  return (
    <section id="contact" className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Contact Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's discuss how we can work together to achieve your goals.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={handleEmailClick}
              className="w-full rounded-md bg-gradient-to-r from-green-600 to-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-green-500 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200 ease-in-out"
            >
              Email Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
