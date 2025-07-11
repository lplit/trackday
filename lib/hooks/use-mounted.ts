'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to determine if the component has mounted on the client
 * Prevents hydration mismatches for client-only features
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
