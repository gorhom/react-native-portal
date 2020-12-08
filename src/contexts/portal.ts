import { createContext } from 'react';
import type { PortalMethods } from '../types';

export const PortalContext = createContext<PortalMethods>({
  mount: () => {},
  unmount: () => {},
});
