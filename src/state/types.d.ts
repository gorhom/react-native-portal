import type { ReactNode } from 'react';
import type { ACTIONS } from './constants';

export interface AddPortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface UpdatePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface RemovePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
}

export interface RegisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export interface UnregisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export type ActionTypes =
  | AddPortalAction
  | UpdatePortalAction
  | RemovePortalAction
  | RegisterHostAction
  | UnregisterHostAction;
