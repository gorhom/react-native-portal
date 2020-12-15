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
  const { state, add, update, remove } = useNodes();
  //#endregion

  //#region
  const handleMount = useCallback(
    (key, node) => {
      add(key, node);
    },
    [add]
  );
  const handleUpdate = useCallback(
    (key, node) => {
      update(key, node);
    },
    [update]
  );
  const handleUnmount = useCallback(
    key => {
      remove(key);
    },
    [remove]
  );
  //#endregion

  //#region forward methods
  useImperativeHandle(ref, () => ({
    mount: handleMount,
    update: handleUpdate,
    unmount: handleUnmount,
  }));
  //#endregion

  //#region render
  return <>{state.map(item => item.node)}</>;
  //#endregion
});

const PortalContainer = memo(PortalContainerComponent);

export default PortalContainer;
