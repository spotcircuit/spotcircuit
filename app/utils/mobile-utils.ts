'use client';

import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
}

export function useViewportHeight() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setHeight(`calc(var(--vh, 1vh) * 100)`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  return height;
}

export function lockBodyScroll(lock: boolean) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (lock) {
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };
  }, [lock]);
}

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  return isTouchDevice;
}

export function useSafeArea() {
  const [safeArea, setSafeArea] = useState({
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  });

  useEffect(() => {
    const updateSafeArea = () => {
      setSafeArea({
        top: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-top') || '0px',
        right: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-right') || '0px',
        bottom: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-bottom') || '0px',
        left: getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-left') || '0px',
      });
    };

    updateSafeArea();
    window.addEventListener('resize', updateSafeArea);
    
    return () => window.removeEventListener('resize', updateSafeArea);
  }, []);

  return safeArea;
}
