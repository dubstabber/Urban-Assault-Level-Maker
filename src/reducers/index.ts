import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import { MenuState } from '../actions/menuActions';

export interface StoreState {
  menu: MenuState;
}

export default combineReducers<StoreState>({
  menu: menuReducer,
});
