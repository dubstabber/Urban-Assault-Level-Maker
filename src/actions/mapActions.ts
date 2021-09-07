import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export const createMap =
  (horizontalNumber: number, verticalNumber: number) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.CREATE_MAP,
      payload: { horizontalNumber, verticalNumber },
    });
  };
