import { ActionTypes } from '../actions/types';
import { MenuState } from '../actions/menuActions';

const initialState: MenuState = {
  activatedMenu: false,
};

const menuReducer = (state = initialState, action: { type: number }) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        activatedMenu: !state.activatedMenu,
      };
    default:
      return state;
  }
};

export default menuReducer;
