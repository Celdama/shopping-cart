const initialState = false;

export const TOGGLE_DISPLAY_CART = 'TOGGLE_DISPLAY_CART';

export const displayCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_CART:
      return !state;
    default:
      return state;
  }
};
