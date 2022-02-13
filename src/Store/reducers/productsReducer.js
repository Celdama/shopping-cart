import { nanoid } from 'nanoid';

const initialState = [
  {
    id: 'aa001',
    name: 'mango',
    quantity: 0,
    price: 29,
    description:
      'The OG tala flavor, ripe mangoes from asia frozen in time their ripest. Crunchy, vegan, just guilt free snacking. 12 packs',
    mainImg: '/static/media/0.047a5a7c66d8bd6a84aa.jpg',
    allProductImg: [
      '../../Images/products/mango/0.jpg',
      '../../Images/products/mango/1.jpg',
      '../../Images/products/mango/2.jpg',
      '../../Images/products/mango/3.jpg',
      '../../Images/products/mango/4.jpg',
    ],
  },
  {
    id: 'ab002',
    name: 'banana',
    quantity: 0,
    price: 29,
    description:
      "Bursting with flavor, this is the banana you've always wanted. Crunchy, vegan, just guilt free snacking. 12 PACKS.",
    mainImg: '/static/media/0.dc59c0d3b8520708b323.jpg',
  },
  {
    id: 'ac003',
    name: 'pineapple',
    quantity: 0,
    price: 29,
    description:
      'A little tart, a little sweet, a lot pineapple. Crunchy, vegan, just guilt free snacking. 12 PACKS.',
    mainImg: '/static/media/0.2cbedddc49f7b1d00780.jpg',
  },
  {
    id: 'ad004',
    name: 'pitahaya',
    quantity: 0,
    price: 29,
    description:
      'Is it pitahaya, pitaya or dragon fruit? Who cares it tastes good. Crunchy, vegan, just guilt free snacking. 12 PACKS.',
    mainImg: '/static/media/0.092f9584d3d59b8dd63c.jpg',
  },
  {
    id: 'ae005',
    name: 'variety',
    quantity: 0,
    price: 29,
    description:
      "Can't decide? Don't blame you. Enjoy our three most popular crunchy, vegan, guilt free flavors. 12 PACKS. ",
    mainImg: '/static/media/0.4fc1e1844cb8d0cdb239.jpg',
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
