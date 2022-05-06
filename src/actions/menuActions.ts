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

export const toggleContextMenu =
  (state: boolean) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: ActionTypes.TOGGLE_CONTEXT_MENU,
      payload: { contextState: state },
    });
  };

export const setClickedPoints =
  (x: number, y: number, windowX: number, windowY: number) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: ActionTypes.SET_CLICKED_POINTS,
      payload: { x, y, windowX, windowY },
    });
  };

export const setWindowSize =
  (width: number, height: number) =>
  (dispatch: Dispatch): void => {
    dispatch({ type: ActionTypes.SET_WINDOW_SIZE, payload: { width, height } });
  };
