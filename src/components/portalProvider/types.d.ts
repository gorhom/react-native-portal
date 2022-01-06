import type { ReactNode } from 'react';

export interface PortalProviderProps {
  /**
   * Defines whether to add a default root host or not.
   *
   * @default true
   * @type boolean
   */
  shouldAddRootHost?: boolean;
  children: ReactNode | ReactNode[];
}
