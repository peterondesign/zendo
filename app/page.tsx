"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import { PremiumProvider } from '../components/premiumcontext'


// Dynamically import the EisenhowerMatrix component and disable SSR
const EisenhowerMatrix = dynamic(() => import('@/components/EisenhowerMatrix'), {
  ssr: false,
});

const Page = (pageProps: any) => {
  return (
    <PremiumProvider {...pageProps}>
      <div>
        <EisenhowerMatrix />
      </div>
    </PremiumProvider>
  );
};

export default Page;
