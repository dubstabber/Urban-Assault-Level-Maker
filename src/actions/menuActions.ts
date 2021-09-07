import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export const toggleMenu =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({ type: ActionTypes.TOGGLE_MENU });
  };

export const disableMenu =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({ type: ActionTypes.DISABLE_MENU });
  };

export const hoverMenu =
  (id: number) =>
  (dispatch: Dispatch): void => {
    dispatch({ type: ActionTypes.HOVER_MENU, payload: { menuId: id } });
  };
