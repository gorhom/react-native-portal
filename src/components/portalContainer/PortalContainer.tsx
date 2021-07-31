import React, { memo } from 'react';
import { Modal } from 'react-native';
import type { PortalContainerProps } from './types';

const PortalContainerComponent = ({
  contained = true,
  children,
}: PortalContainerProps) => {
  return contained ? (
    children
  ) : (
    <Modal transparent={true} animationType="none">
      {children}
    </Modal>
  );
};

const PortalContainer = memo(PortalContainerComponent);

export default PortalContainer;
