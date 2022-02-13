import { SET_CURRENT_PRODUCT } from '../reducers/currentProductReducer';

export const setCurrentProduct = (product) => ({
  type: SET_CURRENT_PRODUCT,
  payload: product,
});
