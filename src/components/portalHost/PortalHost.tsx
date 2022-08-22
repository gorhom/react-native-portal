import React, { memo, useEffect } from 'react';
import { usePortalState } from '../../hooks/usePortalState';
import { usePortal } from '../../hooks/usePortal';
import type { PortalHostProps } from './types';

const PortalHostComponent = ({ name }: PortalHostProps) => {
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
    <>
      {state.map((item, index) => (
        <React.Fragment key={`${item.name}-${index}`}>
          {item.node}
        </React.Fragment>
      ))}
    </>
  );
  //#endregion
};

export const PortalHost = memo(PortalHostComponent);
PortalHost.displayName = 'PortalHost';
