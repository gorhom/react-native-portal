import { ReactNode, useCallback, useContext } from 'react';
import {
  ADD_PORTAL_ACTION,
  REGISTER_HOST_ACTION,
  REMOVE_PORTAL_ACTION,
  DEREGISTER_HOST_ACTION,
  UPDATE_PORTAL_ACTION,
} from '../state/constants';
import { PortalDispatchContext } from '../contexts';

export const usePortal = (hostName: string = 'root') => {
  const dispatch = useContext(PortalDispatchContext);

  if (dispatch === null) {
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }

  //#region methods
  const registerHost = useCallback(() => {
    dispatch({
      type: REGISTER_HOST_ACTION,
      hostName: hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deregisterHost = useCallback(() => {
    dispatch({
      type: DEREGISTER_HOST_ACTION,
      hostName: hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addPortal = useCallback((name: string, node: ReactNode) => {
    dispatch({
      type: ADD_PORTAL_ACTION,
      hostName,
      portalName: name,
      node,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePortal = useCallback((name: string, node: ReactNode) => {
    dispatch({
      type: UPDATE_PORTAL_ACTION,
      hostName,
      portalName: name,
      node,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removePortal = useCallback((name: string) => {
    dispatch({
      type: REMOVE_PORTAL_ACTION,
      hostName,
      portalName: name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return {
    registerHost,
    deregisterHost,
    addPortal,
    updatePortal,
    removePortal,
  };
};
