import type { ReactNode } from 'react';

export interface PortalMethods {
  mount: (key: string, node: ReactNode) => void;
  update: (key: string, node: ReactNode) => void;
  unmount: (key: string) => void;
}

export interface PortalType {
  key: string;
  node: ReactNode;
}
