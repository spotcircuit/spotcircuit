'use client';

import { useEffect } from 'react';

/**
 * This component runs on the client side to find and remove any invalid schema markup
 * that might be causing Google Search Console errors
 */
export default function SchemaCleanup() {
  useEffect(() => {
    try {
      // Find all JSON-LD script tags
      const scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
      
      scriptTags.forEach((scriptTag) => {
        try {
          const schemaContent = JSON.parse(scriptTag.textContent || '{}');
          
          // Check if this is a Review schema with Thing as the itemReviewed type
          if (
            schemaContent['@type'] === 'Review' && 
            schemaContent.itemReviewed && 
            schemaContent.itemReviewed['@type'] === 'Thing'
          ) {
            console.log('Found invalid Review schema with Thing type - updating to Service type');
            
            // Fix the schema by changing Thing to Service
            const updatedSchema = {
              ...schemaContent,
              itemReviewed: {
                ...schemaContent.itemReviewed,
                '@type': 'Service'
              }
            };
            
            // Update the script tag content
            scriptTag.textContent = JSON.stringify(updatedSchema);
          }
        } catch (error) {
          console.error('Error parsing schema JSON:', error);
        }
      });
    } catch (error) {
      console.error('Error in schema cleanup:', error);
    }
  }, []);
  
  return null;
}