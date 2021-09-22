import { ReactNode, useCallback, useContext } from 'react';
import { ACTIONS } from '../state/constants';
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
      type: ACTIONS.REGISTER_HOST,
      hostName: hostName,
    });
  }, [dispatch, hostName]);

  const deregisterHost = useCallback(() => {
    dispatch({
      type: ACTIONS.DEREGISTER_HOST,
      hostName,
    });
  }, [dispatch, hostName]);

  const addPortal = useCallback(
    (name: string, node: ReactNode) => {
      dispatch({
        type: ACTIONS.ADD_PORTAL,
        hostName,
        portalName: name,
        node,
      });
    },
    [dispatch, hostName]
  );

  const updatePortal = useCallback(
    (name: string, node: ReactNode) => {
      dispatch({
        type: ACTIONS.UPDATE_PORTAL,
        hostName,
        portalName: name,
        node,
      });
    },
    [dispatch, hostName]
  );

  const removePortal = useCallback(
    (name: string) => {
      dispatch({
        type: ACTIONS.REMOVE_PORTAL,
        hostName,
        portalName: name,
      });
    },
    [dispatch, hostName]
  );
  //#endregion

  return {
    registerHost,
    deregisterHost,
    addPortal,
    updatePortal,
    removePortal,
  };
};
