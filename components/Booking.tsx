'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal?.("ui", {"styles":{"branding":{"brandColor":"#22c55e"}}});
    })();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32" id="book-demo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-green-500"
          >
            Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Book Your Free Strategy Session
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Schedule a call with our SEO experts to discuss how we can help grow your Shopify store.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 max-w-6xl sm:mt-20"
        >
          {/* Cal.com Embed */}
          <div className="mb-24">
            <div className="relative" style={{height: "750px"}}>
              <Cal
                calLink="brian-pyatt-qf6rjk/30min"
                style={{width:"100%", height:"100%"}}
                config={{
                  hideEventTypeDetails: false
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
