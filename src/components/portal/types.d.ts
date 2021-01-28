import type { ReactNode } from 'react';

export interface PortalProps {
  /**
   * Portal key or name, to be used internally.
   * @type string
   * @default nanoid generated unique key.
   */
  name?: string;
  /**
   * Override internal mounting functionality, this is useful
   * if you want to trigger any action before mounting the portal content.
   * @type (mount?: () => void) => void
   * @default undefined
   */
  handleOnMount?: (mount?: () => void) => void;
  /**
   * Override internal un-mounting functionality, this is useful
   * if you want to trigger any action before un-mounting the portal content.
   * @type (mount?: () => void) => void
   * @default undefined
   */
  handleOnUnmount?: (unmount?: () => void) => void;
  /**
   * Portal content.
   */
  children?: ReactNode | ReactNode[];
}
