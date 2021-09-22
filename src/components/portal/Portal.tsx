import React, { memo, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { usePortal } from '../../hooks';
import type { PortalProps } from './types';
import { Modal } from 'react-native';

const PortalComponent = ({
  name: _providedName,
  hostName,
  contained = true,
  children,
  handleOnMount,
  handleOnUnmount,

  // modal props
  animationType = 'none',
  transparent = true,
  hardwareAccelerated,
  statusBarTranslucent,
}: PortalProps) => {
  //#region hooks
  const { addPortal, removePortal, updatePortal } = usePortal(hostName);
  //#endregion

  //#region variables
  const name = useMemo(() => _providedName || nanoid(), [_providedName]);
  //#endregion

  //#region effects
  useEffect(() => {
    /**
     * if portal is not contained, then
     * we skip adding portal to the host.
     */
    if (!contained) {
      if (handleOnMount) {
        handleOnMount();
      }
      return;
    }

    if (handleOnMount) {
      handleOnMount(() => addPortal(name, children));
    } else {
      addPortal(name, children);
    }

    return () => {
      /**
       * if portal is not contained, then
       * we skip removing portal to the host.
       */
      if (!contained) {
        if (handleOnUnmount) {
          handleOnUnmount();
        }
        return;
      }

      if (handleOnUnmount) {
        handleOnUnmount(() => removePortal(name));
      } else {
        removePortal(name);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!contained) {
      return;
    }

    updatePortal(name, children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  //#endregion

  //#region render
  if (contained) {
    return null;
  }

  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      hardwareAccelerated={hardwareAccelerated}
      statusBarTranslucent={statusBarTranslucent}
    >
      {children}
    </Modal>
  );
  //#endregion
};

const Portal = memo(PortalComponent);
Portal.displayName = 'Portal';

export default Portal;
