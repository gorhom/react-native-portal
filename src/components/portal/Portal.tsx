import { memo, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { usePortal } from '../../hooks';
import type { PortalProps } from './types';

const PortalComponent = ({ name: _providedName, children }: PortalProps) => {
  //#region hooks
  const { mount, unmount } = usePortal();
  //#endregion

  //#region variables
  const name = useMemo(() => _providedName || nanoid(), [_providedName]);
  //#endregion

  //#region effects
  useEffect(() => {
    mount(name, children);
    return () => {
      unmount(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return null;
};

const Portal = memo(PortalComponent);

export default Portal;
