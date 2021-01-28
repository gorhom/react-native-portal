import { memo, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { usePortal } from '../../hooks';
import type { PortalProps } from './types';

const PortalComponent = ({
  name: _providedName,
  handleOnMount,
  handleOnUnmount,
  children,
}: PortalProps) => {
  //#region hooks
  const { mount, unmount, update } = usePortal();
  //#endregion

  //#region variables
  const name = useMemo(() => _providedName || nanoid(), [_providedName]);
  //#endregion

  //#region effects
  useEffect(() => {
    if (handleOnMount) {
      handleOnMount(() => mount(name, children));
    } else {
      mount(name, children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    return () => {
      if (handleOnUnmount) {
        handleOnUnmount(() => unmount(name));
      } else {
        unmount(name);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    update(name, children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  //#endregion

  return null;
};

const Portal = memo(PortalComponent);

export default Portal;
