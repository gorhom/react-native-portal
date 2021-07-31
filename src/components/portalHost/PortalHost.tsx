import React, { memo, useEffect } from 'react';
import { usePortal, usePortalState } from '../../hooks';
import PortalContainer from '../portalContainer';
import type { PortalHostProps } from './types';

const PortalHostComponent = ({ name, contained = true }: PortalHostProps) => {
  //#region hooks
  const state = usePortalState(name);
  const { registerHost, deregisterHost } = usePortal(name);
  //#endregion

  //#region effects
  useEffect(() => {
    registerHost();
    return () => {
      deregisterHost();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region render
  return (
    <PortalContainer contained={contained}>
      {state.map(item => item.node)}
    </PortalContainer>
  );
  //#endregion
};

const PortalHost = memo(PortalHostComponent);
PortalHost.displayName = 'PortalHost';

export default PortalHost;
