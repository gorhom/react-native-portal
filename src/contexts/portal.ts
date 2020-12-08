import { createContext } from 'react';
import type { PortalMethods } from '../types';

interface PortalContextType extends PortalMethods {}

export const PortalContext = createContext<PortalContextType>({
  mount: () => {},
  unmount: () => {},
});
