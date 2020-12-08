import * as Actions from './constants';

type ActionType = {
  type: keyof typeof Actions;
  key: string;
  node?: any;
};
