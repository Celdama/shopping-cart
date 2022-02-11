import { nanoid } from 'nanoid';

const initialState = [
  {
    id: nanoid(),
    name: 'mango',
    quantity: 0,
    price: 29,
    img: '../../Images/products/mango/mainImg.jpg',
  },
  {
    id: nanoid(),
    name: 'banana',
    quantity: 0,
    price: 29,
    img: '../../Images/products/banana/mainImg.jpg',
  },
  {
    id: nanoid(),
    name: 'pineapple',
    quantity: 0,
    price: 29,
    img: '../../Images/products/pineapple/mainImg.jpg',
  },
  {
    id: nanoid(),
    name: 'pitahaya',
    quantity: 0,
    price: 29,
    img: '../../Images/products/pitahaya/mainImg.jpg',
  },
  {
    id: nanoid(),
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
        return product.name === action.payload.name
          ? { ...product, quantity: action.payload.quantity + 1 }
          : product;
      });
    default:
      return state;
  }
};
