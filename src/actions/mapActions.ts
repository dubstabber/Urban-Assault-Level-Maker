import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { Hoststation } from '../UA structures/Hoststation';

export const createMap =
  (horizontalNumber: number, verticalNumber: number) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.CREATE_MAP,
      payload: { horizontalNumber, verticalNumber },
    });
  };

export const addHostStation =
  (x: number, y: number, owner: number, vehicleID: number) =>
  (dispatch: Dispatch) => {
    const newHostStation = new Hoststation(x, y, owner, vehicleID);
    dispatch({
      type: ActionTypes.ADD_HOSTSTATION,
      payload: { newHostStation },
    });
  };
