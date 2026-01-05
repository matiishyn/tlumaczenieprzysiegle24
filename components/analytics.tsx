'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export function Analytics() {
  const GA_MEASUREMENT_ID = 'G-9X5LYCSPHC';

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
