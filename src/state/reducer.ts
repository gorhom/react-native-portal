import produce from 'immer';
import {
  REGISTER_HOST_ACTION,
  DEREGISTER_HOST_ACTION,
  ADD_PORTAL_ACTION,
  REMOVE_PORTAL_ACTION,
  UPDATE_PORTAL_ACTION,
} from './constants';
import type { PortalType } from '../types';
import type { ActionTypes, AddPortalAction } from './types';

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

const addPortal = (
  draft: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
  node: any
) => {
  if (!(hostName in draft)) {
    registerHost(draft, hostName);
  }

  draft[hostName].push({
    name: portalName,
    node,
  });
};

const updatePortal = (
  draft: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
  node: any
) => {
  if (!(hostName in draft)) {
    if (__DEV__) {
      console.error(
        `Failed to update portal '${portalName}', '${hostName}' was not registered!`
      );
    }
    return;
  }

  const index = draft[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) {
    draft[hostName][index].node = node;
  }
};

const removePortal = (
  draft: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string
) => {
  if (!(hostName in draft)) {
    if (__DEV__) {
      console.error(
        `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
      );
    }
    return;
  }

  const index = draft[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) draft[hostName].splice(index, 1);
};

export const reducer = produce(
  (draft: Record<string, Array<PortalType>>, action: ActionTypes) => {
    const { type } = action;
    switch (type) {
      case REGISTER_HOST_ACTION:
        registerHost(draft, action.hostName);
        break;

      case DEREGISTER_HOST_ACTION:
        deregisterHost(draft, action.hostName);
        break;

      case ADD_PORTAL_ACTION:
        addPortal(
          draft,
          action.hostName,
          (action as AddPortalAction).portalName,
          (action as AddPortalAction).node
        );
        break;

      case UPDATE_PORTAL_ACTION:
        updatePortal(
          draft,
          action.hostName,
          (action as AddPortalAction).portalName,
          (action as AddPortalAction).node
        );
        break;

      case REMOVE_PORTAL_ACTION:
        removePortal(
          draft,
          action.hostName,
          (action as AddPortalAction).portalName
        );
        break;
    }
    return draft;
  }
);
