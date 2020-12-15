import type { PortalType } from '../types';

export const selector = (state: Array<PortalType>, key: string) =>
  state.find(item => item.key === key);
