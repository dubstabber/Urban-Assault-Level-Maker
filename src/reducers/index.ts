import { combineReducers } from 'redux';
import { menuReducer, MenuState } from './menuReducer';
import { windowReducer, WindowState } from './windowReducer';

export interface StoreState {
  menu: MenuState;
  window: WindowState;
}

export default combineReducers<StoreState>({
  menu: menuReducer,
  window: windowReducer,
});
