// AuthLoader.tsx
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Spinner } from '@nextui-org/react';

export default function AuthLoader({ children }: { children: React.ReactNode }) {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="bg-default-50 dark:bg-default-900 flex items-center justify-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
}
