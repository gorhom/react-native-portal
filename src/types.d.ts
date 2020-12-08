import type { ReactNode } from 'react';

interface PortalMethods {
  mount: (key: string, node: ReactNode) => void;
  unmount: (key: string) => void;
}
