import { memo, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { usePortal } from '../../hooks';
import type { PortalProps } from './types';

const PortalComponent = ({ key: _providedKey, children }: PortalProps) => {
  //#region hooks
  const { mount, unmount } = usePortal();
  //#endregion

  //#region variables
  const key = useMemo(() => _providedKey || nanoid(), [_providedKey]);
  //#endregion

  //#region effects
  useEffect(() => {
    mount(key, children);
    return () => {
      unmount(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, children]);
  //#endregion

  return null;
};

const Portal = memo(PortalComponent);

export default Portal;
