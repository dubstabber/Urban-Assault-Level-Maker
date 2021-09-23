import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { Hoststation } from '../UA structures/Hoststation';
import { Unit } from '../UA structures/Unit';
import { Squad } from '../UA structures/Squad';

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

export const addSquad =
  (x: number, y: number, owner: number, vehicleID: number) =>
  (dispatch: Dispatch) => {
    const newSquad = new Squad(x, y, owner, vehicleID);
    dispatch({ type: ActionTypes.ADD_SQUAD, payload: { newSquad } });
  };

export const selectUnit = (unit: Unit) => (dispatch: Dispatch) => {
  if (unit) {
    dispatch({ type: ActionTypes.SELECT_UNIT, payload: { unit } });
  } else {
    dispatch({ type: ActionTypes.SELECT_UNIT, payload: { unit: null } });
  }
};
