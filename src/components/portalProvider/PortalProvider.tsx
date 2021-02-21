import React, { memo, useReducer } from 'react';
import PortalHost from '../portalHost';
import { PortalDispatchContext, PortalStateContext } from '../../contexts';
import { reducer, INITIAL_STATE } from '../../state';
import type { PortalProviderProps } from './types';

const PortalProviderComponent = ({ children }: PortalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <PortalDispatchContext.Provider value={dispatch}>
      <PortalStateContext.Provider value={state}>
        {children}
        <PortalHost name="root" />
      </PortalStateContext.Provider>
    </PortalDispatchContext.Provider>
  );
};

const PortalProvider = memo(PortalProviderComponent);

export default PortalProvider;
