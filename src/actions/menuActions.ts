import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface MenuState {
  activatedMenu: boolean;
}

export const toggleMenu =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({ type: ActionTypes.TOGGLE_MENU });
  };
