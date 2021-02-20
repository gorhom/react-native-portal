import React, { memo, useEffect } from 'react';
import { usePortal, usePortalState } from '../../hooks';
import type { PortalHostProps } from './types';

const PortalHostComponent = ({ name }: PortalHostProps) => {
  //#region hooks
  const state = usePortalState(name);
  const { registerHost, unregisterHost } = usePortal(name);
  //#endregion

  //#region effects
  useEffect(() => {
    registerHost();
    return () => {
      unregisterHost();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region render
  return <>{state.map(item => item.node)}</>;
  //#endregion
};

const PortalHost = memo(PortalHostComponent);

export default PortalHost;
