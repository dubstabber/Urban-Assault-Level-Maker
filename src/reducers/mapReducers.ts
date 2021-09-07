import { ActionTypes } from '../actions/types';

export interface MapState {
  horizontalSectors: number;
  verticalSectors: number;
}

const initialState: MapState = {
  horizontalSectors: 0,
  verticalSectors: 0,
};

const mapReducer = (
  state = initialState,
  action: { type: number; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.CREATE_MAP:
      return {
        ...state,
        horizontalSectors: action.payload.horizontalNumber,
        verticalSectors: action.payload.verticalNumber,
      };
    default:
      return state;
  }
};

export { mapReducer };
