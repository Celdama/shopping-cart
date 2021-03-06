import { nanoid } from 'nanoid';

const initialState = [
  {
    id: 'aa001',
    name: 'mango',
    quantity: 0,
    price: 29,
    color: 'orange',
    description:
      'The OG tala flavor, ripe mangoes from asia frozen in time their ripest. Crunchy, vegan, just guilt free snacking. 12 packs',
  },
  {
    id: 'ab002',
    name: 'banana',
    quantity: 0,
    price: 29,
    color: 'yellow',
    description:
      "Bursting with flavor, this is the banana you've always wanted. Crunchy, vegan, just guilt free snacking. 12 PACKS.",
  },
  {
    id: 'ac003',
    name: 'pineapple',
    quantity: 0,
    price: 29,
    color: 'green',
    description:
      'A little tart, a little sweet, a lot pineapple. Crunchy, vegan, just guilt free snacking. 12 PACKS.',
  },
  {
    id: 'ad004',
    name: 'pitahaya',
    quantity: 0,
    price: 29,
    color: 'red',
    description:
      'Is it pitahaya, pitaya or dragon fruit? Who cares it tastes good. Crunchy, vegan, just guilt free snacking. 12 PACKS.',
  },
  {
    id: 'ae005',
    name: 'variety',
    quantity: 0,
    price: 29,
    color: 'white',
    description:
      "Can't decide? Don't blame you. Enjoy our three most popular crunchy, vegan, guilt free flavors. 12 PACKS. ",
  },
];

export const INCREMENTE_PRODUCT_QUANTITY = 'INCREMENTE_PRODUCT_QUANTITY';
export const DECREMENTE_PRODUCT_QUANTITY = 'DECREMENTE_PRODUCT_QUANTITY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const RESET_PRODUCT_QUANTITY_AFTER_ORDER =
  'RESET_PRODUCT_QUANTITY_AFTER_ORDER';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTE_PRODUCT_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case DECREMENTE_PRODUCT_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    case DELETE_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: 0 };
        }
        return product;
      });
    case RESET_PRODUCT_QUANTITY_AFTER_ORDER:
      return state.map((product) => {
        return { ...product, quantity: 0 };
      });

    default:
      return state;
  }
};
