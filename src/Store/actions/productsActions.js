import { INCREMENTE_PRODUCT_QUANTITY } from '../reducers/productsReducer';

export const incrementeProductQuantity = (product) => ({
  type: INCREMENTE_PRODUCT_QUANTITY,
  payload: product,
});
