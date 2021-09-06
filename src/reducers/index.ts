import { combineReducers } from 'redux';
import { menuReducer, MenuState } from './menuReducer';

export interface StoreState {
  menu: MenuState;
}

export default combineReducers<StoreState>({
  menu: menuReducer,
});
