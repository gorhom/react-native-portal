import type { ReactNode } from 'react';
import type {
  ADD_PORTAL_ACTION,
  REGISTER_HOST_ACTION,
  REMOVE_PORTAL_ACTION,
  DEREGISTER_HOST_ACTION,
  UPDATE_PORTAL_ACTION,
} from './constants';

export interface AddPortalAction {
  type: typeof ADD_PORTAL_ACTION;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface UpdatePortalAction {
  type: typeof UPDATE_PORTAL_ACTION;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface RemovePortalAction {
  type: typeof REMOVE_PORTAL_ACTION;
  hostName: string;
  portalName: string;
}

export interface RegisterHostAction {
  type: typeof REGISTER_HOST_ACTION;
  hostName: string;
}

export interface UnregisterHostAction {
  type: typeof DEREGISTER_HOST_ACTION;
  hostName: string;
}

export type ActionTypes =
  | AddPortalAction
  | UpdatePortalAction
  | RemovePortalAction
  | RegisterHostAction
  | UnregisterHostAction;
