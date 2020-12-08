import { ReactNode, useCallback, useReducer } from 'react';
import { reducer } from '../state';

export const useNodes = () => {
  const [state, dispatch] = useReducer(reducer, {});

  const add = useCallback((key: string, node: ReactNode) => {
    dispatch({
      type: 'ADD_ACTION',
      key,
      node,
    });
  }, []);

  const remove = useCallback((key: string) => {
    dispatch({
      type: 'REMOVE_ACTION',
      key,
    });
  }, []);

  return { state, add, remove };
};
