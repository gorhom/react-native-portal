import { ACTIONS } from './constants';
import { print } from '../utilities/logger';
import type { PortalType } from '../types';
import type { ActionTypes, AddPortalAction } from './types';

const registerHost = (
  state: Record<string, Array<PortalType>>,
  hostName: string
) => {
  let updatedState = { ...state };
  if (!(hostName in updatedState)) {
    updatedState[hostName] = [];
  }
  return updatedState;
};

const deregisterHost = (
  state: Record<string, Array<PortalType>>,
  hostName: string
) => {
  let updatedState = { ...state };
  delete updatedState[hostName];
  return updatedState;
};

const addOrUpdatePortal = (
  state: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
  node: any
) => {
  let updatedState = { ...state };
  if (!(hostName in updatedState)) {
    updatedState = registerHost(updatedState, hostName);
  }

  /**
   * updated portal, if it was already added.
   */
  const index = updatedState[hostName].findIndex(
    item => item.name === portalName
  );
  if (index !== -1) {
    updatedState[hostName][index].node = node;
  } else {
    updatedState[hostName].push({
      name: portalName,
      node,
    });
  }
  return updatedState;
};

const removePortal = (
  state: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string
) => {
  let updatedState = { ...state };
  if (!(hostName in updatedState)) {
    print({
      component: reducer.name,
      method: removePortal.name,
      params: `Failed to remove portal '${portalName}', '${hostName}' was not registered!`,
    });
    return updatedState;
  }

  const index = updatedState[hostName].findIndex(
    item => item.name === portalName
  );
  if (index !== -1) updatedState[hostName].splice(index, 1);
  return updatedState;
};

export const reducer = (
  state: Record<string, Array<PortalType>>,
  action: ActionTypes
) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.REGISTER_HOST:
      return registerHost(state, action.hostName);
    case ACTIONS.DEREGISTER_HOST:
      return deregisterHost(state, action.hostName);
    case ACTIONS.ADD_PORTAL:
    case ACTIONS.UPDATE_PORTAL:
      return addOrUpdatePortal(
        state,
        action.hostName,
        (action as AddPortalAction).portalName,
        (action as AddPortalAction).node
      );
    case ACTIONS.REMOVE_PORTAL:
      return removePortal(
        state,
        action.hostName,
        (action as AddPortalAction).portalName
      );
    default:
      return state;
  }
};
