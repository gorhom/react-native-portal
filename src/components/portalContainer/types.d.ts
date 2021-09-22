export interface PortalContainerProps {
  /**
   * Determines whether the portal host will be rendered under the
   * react native root view or native root view.
   * @type boolean
   * @default true
   */
  contained?: boolean;
  children: any;
}
