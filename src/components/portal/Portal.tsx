import { memo, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { usePortal } from '../../hooks';
import type { PortalProps } from './types';

const PortalComponent = ({
  name: _providedName,
  hostName,
  handleOnMount,
  handleOnUnmount,
  children,
}: PortalProps) => {
  //#region hooks
  const { addPortal, removePortal, updatePortal } = usePortal(hostName);
  //#endregion

  //#region variables
  const name = useMemo(() => _providedName || nanoid(), [_providedName]);
  //#endregion

  //#region effects
  useEffect(() => {
    if (handleOnMount) {
      handleOnMount(() => addPortal(name, children));
    } else {
      addPortal(name, children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    return () => {
      if (handleOnUnmount) {
        handleOnUnmount(() => removePortal(name));
      } else {
        removePortal(name);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    updatePortal(name, children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  //#endregion

  return null;
};

const Portal = memo(PortalComponent);
Portal.displayName = 'Portal';

export default Portal;
