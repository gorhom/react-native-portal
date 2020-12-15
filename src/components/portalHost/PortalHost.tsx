import React, { memo, useCallback, useMemo, useRef } from 'react';
import PortalContainer from '../portalContainer';
import { PortalContext } from '../../contexts';
import type { PortalMethods } from '../../types';
import type { PortalHostProps } from './types';

const PortalHostComponent = ({ children }: PortalHostProps) => {
  const containerRef = useRef<PortalMethods>(null);

  //#region
  const mount = useCallback((key, node) => {
    if (containerRef.current) {
      containerRef.current.mount(key, node);
    }
  }, []);
  const update = useCallback((key, node) => {
    if (containerRef.current) {
      containerRef.current.update(key, node);
    }
  }, []);
  const unmount = useCallback(key => {
    if (containerRef.current) {
      containerRef.current.unmount(key);
    }
  }, []);
  //#endregion

  const value = useMemo(
    () => ({
      mount,
      update,
      unmount,
    }),
    [mount, update, unmount]
  );

  return (
    <PortalContext.Provider value={value}>
      {children}
      <PortalContainer ref={containerRef} />
    </PortalContext.Provider>
  );
};

const PortalHost = memo(PortalHostComponent);

export default PortalHost;
