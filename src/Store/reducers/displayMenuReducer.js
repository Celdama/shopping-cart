const initialState = false;

export const TOGGLE_DISPLAY_MENU = 'TOGGLE_DISPLAY_MENU';

export const displayMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_MENU:
      return !state;
    default:
      return state;
  }
};
