import { ADD_ACTION, REMOVE_ACTION, UPDATE_ACTION } from './constants';
import { selector } from './selector';
import type { PortalType } from '../types';
import type { ActionType } from './types';

export const reducer = (
  state: Array<PortalType>,
  action: ActionType
): Array<PortalType> => {
  const { type, key, node = null } = action;

  switch (type) {
    case ADD_ACTION:
      return [
        ...state,
        {
          key,
          node,
        },
      ];

    case UPDATE_ACTION:
      return [
        ...state.filter(item => item.key !== key),
        {
          key,
          node,
        },
      ];

    case REMOVE_ACTION:
      if (selector(state, key)) {
        const newState = state.filter(item => item.key !== key);
        return newState;
      }
      break;
  }
  return state;
};
