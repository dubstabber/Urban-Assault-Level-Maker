import { ActionTypes } from '../actions/types';

export interface MenuState {
  activatedMenu: boolean;
  hoverMenuId: number;
}

const initialState: MenuState = {
  activatedMenu: false,
  hoverMenuId: 0,
};

const menuReducer = (
  state = initialState,
  action: { type: number; payload: { menuId: number } }
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        activatedMenu: !state.activatedMenu,
      };
    case ActionTypes.HOVER_MENU:
      return {
        ...state,
        hoverMenuId: action.payload.menuId,
      };
    default:
      return state;
  }
};

export { menuReducer };
