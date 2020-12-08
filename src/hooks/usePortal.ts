import { useContext } from 'react';
import { PortalContext } from '../contexts';

export const usePortal = () => useContext(PortalContext);
