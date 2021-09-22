import { ActionTypes } from '../actions/types';
import { Hoststation } from '../UA structures/Hoststation';
import { Unit } from '../UA structures/Unit';
import UAdata from '../UAdata.json';

export interface MapState {
  horizontalSectors: number;
  verticalSectors: number;
  sectorSize: number;
  sectorIndent: number;
  data: Object;
  selectedUnit: Unit | null;
  hostStations: Array<Hoststation>;
}

const initialState: MapState = {
  horizontalSectors: 0,
  verticalSectors: 0,
  sectorSize: 50,
  sectorIndent: 2,
  data: UAdata.original,
  selectedUnit: null,
  hostStations: [],
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

    case ActionTypes.ADD_HOSTSTATION:
      action.payload.newHostStation.updateImage(
        state.sectorSize * 0.5,
        state.sectorSize * 0.5
      );
      state.hostStations.push(action.payload.newHostStation);
      return state;
    case ActionTypes.SELECT_UNIT:
      return {
        ...state,
        selectedUnit: action.payload.unit,
      };
    default:
      return state;
  }
};

export { mapReducer };
