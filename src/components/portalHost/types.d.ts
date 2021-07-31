export interface PortalHostProps {
  /**
   * Host's key or name to be used as an identifer.
   * @type string
   */
  name: string;
  /**
   * Determines whether the container will be rendered under the
   * react native root view or native root view.
   * @type boolean
   * @default true
   */
  contained?: boolean;
}
