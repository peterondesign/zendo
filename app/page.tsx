"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the EisenhowerMatrix component and disable SSR
const EisenhowerMatrix = dynamic(() => import('@/components/EisenhowerMatrix'), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <EisenhowerMatrix />
    </div>
  );
};

export default Page;
