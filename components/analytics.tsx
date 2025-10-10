'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export function Analytics() {
  // Replace with your actual GA4 measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null; // Don't load GA in development or without proper ID
  }

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
