import {
  INCREMENTE_PRODUCT_QUANTITY,
  DECREMENTE_PRODUCT_QUANTITY,
  DELETE_PRODUCT,
  RESET_PRODUCT_QUANTITY_AFTER_ORDER,
} from '../reducers/productsReducer';

export const incrementeProductQuantity = (product) => ({
  type: INCREMENTE_PRODUCT_QUANTITY,
  payload: product,
});

export const decrementeProductQuantity = (product) => ({
  type: DECREMENTE_PRODUCT_QUANTITY,
  payload: product,
});

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  payload: product,
});

export const resetProductQuantityAfterOrder = (product) => ({
  type: RESET_PRODUCT_QUANTITY_AFTER_ORDER,
  payload: product,
});
