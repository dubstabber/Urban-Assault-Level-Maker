import { ActionTypes } from '../actions/types';

export interface WindowState {
  newMapEnabled: boolean;
}

const initialState: WindowState = {
  newMapEnabled: false,
};

const windowReducer = (
  state = initialState,
  action: { type: number; payload: { enabled: boolean } }
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NEWMAP_WINDOW:
      return {
        ...state,
        newMapEnabled: action.payload.enabled,
      };
    default:
      return state;
  }
};

export { windowReducer };
