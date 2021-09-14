import { ActionTypes } from '../actions/types';

export interface MenuState {
  activatedMenu: boolean;
  hoverMenuId: number;
  contextMenu: boolean;
}

const initialState: MenuState = {
  activatedMenu: false,
  hoverMenuId: 0,
  contextMenu: false,
};

const menuReducer = (
  state = initialState,
  action: { type: number; payload: { menuId: number; contextState: boolean } }
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        activatedMenu: !state.activatedMenu,
      };
    case ActionTypes.DISABLE_MENU:
      return {
        ...state,
        activatedMenu: false,
      };
    case ActionTypes.HOVER_MENU:
      return {
        ...state,
        hoverMenuId: action.payload.menuId,
      };
    case ActionTypes.TOGGLE_CONTEXT_MENU:
      return {
        ...state,
        contextMenu: action.payload.contextState,
      };
    default:
      return state;
  }
};

export { menuReducer };
