import { ActionTypes } from '../actions/types';

export interface MenuState {
  activatedMenu: boolean;
  hoverMenuId: number;
  contextMenu: boolean;
  clickedX: number;
  clickedY: number;
  clickedWindowX: number;
  clickedWindowY: number;
  screenWidth: number;
  screenHeight: number;
}

const initialState: MenuState = {
  activatedMenu: false,
  hoverMenuId: 0,
  contextMenu: false,
  clickedX: 0,
  clickedY: 0,
  clickedWindowX: 0,
  clickedWindowY: 0,
  screenWidth: 0,
  screenHeight: 0,
};

const menuReducer = (
  state = initialState,
  action: { type: number; payload: any }
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
    case ActionTypes.SET_WINDOW_SIZE:
      return {
        ...state,
        screenWidth: action.payload.width,
        screenHeight: action.payload.height,
      };
    case ActionTypes.SET_CLICKED_POINTS:
      return {
        ...state,
        clickedX: action.payload.x,
        clickedY: action.payload.y,
        clickedWindowX: action.payload.windowX,
        clickedWindowY: action.payload.windowY,
      };
    default:
      return state;
  }
};

export { menuReducer };
