import type { ReactNode } from 'react';
import type { ModalProps } from 'react-native';

export interface PortalProps
  extends Pick<
    ModalProps,
    | 'animationType'
    | 'transparent'
    | 'hardwareAccelerated'
    | 'statusBarTranslucent'
  > {
  /**
   * Portal's key or name to be used as an identifer.
   * @type string
   * @default nanoid generated unique key.
   */
  name?: string;
  /**
   * Host's name to teleport the portal content to.
   * @type string
   * @default 'root'
   */
  hostName?: string;
  /**
   * Determines whether the portal will be rendered under the
   * react native root view or native root view.
   * @type boolean
   * @default true
   */
  contained?: boolean;
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
   * Portal's content.
   * @type ReactNode
   * @default undefined
   */
  children?: ReactNode | ReactNode[];
}
