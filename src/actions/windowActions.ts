import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export const toggleNewMapWindow =
  (state: boolean) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: ActionTypes.TOGGLE_NEWMAP_WINDOW,
      payload: { enabled: state },
    });
  };
