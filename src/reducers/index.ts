import { combineReducers } from 'redux';
import { mapReducer, MapState } from './mapReducers';
import { menuReducer, MenuState } from './menuReducer';
import { windowReducer, WindowState } from './windowReducer';

export interface StoreState {
  menu: MenuState;
  window: WindowState;
  map: MapState;
}

export default combineReducers<StoreState>({
  menu: menuReducer,
  window: windowReducer,
  map: mapReducer,
});
