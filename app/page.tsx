"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client'


// Dynamically import the EisenhowerMatrix component and disable SSR
const EisenhowerMatrix = dynamic(() => import('@/components/EisenhowerMatrix'), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <UserProvider>
        <EisenhowerMatrix />
      </UserProvider>
    </div>
  );
};

export default Page;
