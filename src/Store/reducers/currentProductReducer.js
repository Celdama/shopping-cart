export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';

export const currentProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
