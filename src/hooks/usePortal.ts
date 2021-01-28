import { useContext } from 'react';
import { PortalContext } from '../contexts';

export const usePortal = () => {
  const value = useContext(PortalContext);

  if (value === null) {
    throw new Error(
      "Portal context cannot be null, please add 'PortalHost' to the root component."
    );
  }

  return value;
};
