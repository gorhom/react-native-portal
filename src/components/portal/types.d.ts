import type { ReactNode } from 'react';

export interface PortalProps {
  /**
   * Portal key or name, to be used internally.
   * @type string
   * @default nanoid generated unique key.
   */
  name?: string;
  /**
   * Portal content.
   */
  children?: ReactNode | ReactNode[];
}
