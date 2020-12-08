import type { ReactNode } from 'react';
import { ADD_ACTION, REMOVE_ACTION } from './constants';
import { selector } from './selector';
import type { ActionType } from './types';

export const reducer = (
  state: Record<string, any>,
  action: ActionType
): Record<string, ReactNode> => {
  const { type, key } = action;

  switch (type) {
    case ADD_ACTION:
      return {
        ...state,
        [key]: action.node,
      };

    case REMOVE_ACTION:
      if (selector(state, key)) {
        const newState = { ...state };
        delete newState[key];
        return newState;
      }
      break;
  }
  return state;
};
