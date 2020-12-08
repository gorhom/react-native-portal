import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
} from 'react';
import { useNodes } from '../../hooks';
import type { PortalMethods } from '../../types';

const PortalContainerComponent = forwardRef<PortalMethods, any>((_, ref) => {
  //#region state
  const { state, add, remove } = useNodes();
  //#endregion

  //#region
  const mount = useCallback(
    (key, node) => {
      add(key, node);
    },
    [add]
  );
  const unmount = useCallback(
    key => {
      remove(key);
    },
    [remove]
  );
  //#endregion

  //#region forward methods
  useImperativeHandle(ref, () => ({
    mount,
    unmount,
  }));
  //#endregion

  //#region render
  return <>{Object.keys(state).map(key => state[key]) || null}</>;
  //#endregion
});

const PortalContainer = memo(PortalContainerComponent);

export default PortalContainer;
