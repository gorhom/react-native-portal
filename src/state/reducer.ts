import produce, { enableES5, setAutoFreeze } from 'immer';
import { ACTIONS } from './constants';
import { print } from '../utilities/logger';
import type { PortalType } from '../types';
import type { ActionTypes, AddPortalAction } from './types';

enableES5();
setAutoFreeze(false);

const registerHost = (
  draft: Record<string, Array<PortalType>>,
  hostName: string
) => {
  if (!(hostName in draft)) {
    draft[hostName] = [];
  }
};

const deregisterHost = (
  draft: Record<string, Array<PortalType>>,
  hostName: string
) => {
  delete draft[hostName];
};

const addOrUpdatePortal = (
  draft: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
  node: any
) => {
  if (!(hostName in draft)) {
    registerHost(draft, hostName);
  }

  /**
   * updated portal, if it was already added.
   */
  const index = draft[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) {
    draft[hostName][index].node = node;
  } else {
    draft[hostName].push({
      name: portalName,
      node,
    });
  }
};

const removePortal = (
  draft: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string
) => {
  if (!(hostName in draft)) {
    print({
      component: reducer.name,
      method: removePortal.name,
      params: `Failed to remove portal '${portalName}', '${hostName}' was not registered!`,
    });
    return;
  }

  const index = draft[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) draft[hostName].splice(index, 1);
};

export const reducer = produce(
  (draft: Record<string, Array<PortalType>>, action: ActionTypes) => {
    const { type } = action;
    switch (type) {
      case ACTIONS.REGISTER_HOST:
        registerHost(draft, action.hostName);
        break;

      case ACTIONS.DEREGISTER_HOST:
        deregisterHost(draft, action.hostName);
        break;

      case ACTIONS.ADD_PORTAL:
      case ACTIONS.UPDATE_PORTAL:
        addOrUpdatePortal(
          draft,
          action.hostName,
          (action as AddPortalAction).portalName,
          (action as AddPortalAction).node
        );
        break;

      case ACTIONS.REMOVE_PORTAL:
        removePortal(
          draft,
          action.hostName,
          (action as AddPortalAction).portalName
        );
        break;
    }
  }
);
