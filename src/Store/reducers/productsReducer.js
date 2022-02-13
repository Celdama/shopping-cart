import { nanoid } from 'nanoid';

const initialState = [
  {
    id: 'aa001',
    name: 'mango',
    quantity: 0,
    price: 29,
    img: '../../Images/products/mango/mainImg.jpg',
  },
  {
    id: 'ab002',
    name: 'banana',
    quantity: 0,
    price: 29,
    img: '../../Images/products/banana/mainImg.jpg',
  },
  {
    id: 'ac003',
    name: 'pineapple',
    quantity: 0,
    price: 29,
    img: '../../Images/products/pineapple/mainImg.jpg',
  },
  {
    id: 'ad004',
    name: 'pitahaya',
    quantity: 0,
    price: 29,
    img: '../../Images/products/pitahaya/mainImg.jpg',
  },
  {
    id: 'ae005',
    name: 'variety',
    quantity: 0,
    price: 29,
    img: '../../Images/products/variety/mainImg.jpg',
  },
];

export const INCREMENTE_PRODUCT_QUANTITY = 'INCREMENTE_PRODUCT_QUANTITY';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTE_PRODUCT_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

    default:
      return state;
  }
};
