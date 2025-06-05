"use client";

import { useEffect } from 'react';

type ChatbotWidgetProps = {
  userData?: {
    name?: string;
    email?: string;
    phone?: string;
    info?: string;
  };
};

const ChatbotWidget = ({ userData = {} }: ChatbotWidgetProps) => {
  useEffect(() => {
    // Add CSS to move reCAPTCHA badge to the left side
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .grecaptcha-badge { 
        left: 0 !important;
        right: auto !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Create a script element for the ChatNode.ai popup
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.chatnode.ai/a6626482-a418-49be-9cbe-692e325a9c11/popup.js';
    
    // Add user data attributes if provided
    if (userData.name) script.setAttribute('data-name', userData.name);
    if (userData.email) script.setAttribute('data-email', userData.email);
    if (userData.phone) script.setAttribute('data-phone', userData.phone);
    if (userData.info) script.setAttribute('data-info', userData.info);
    
    // Append the script to the document body
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [userData]);
  
  return null; // This component doesn't render anything visible
};

export default ChatbotWidget;
