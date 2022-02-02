import { nanoid } from 'nanoid';

import mango0 from '../Images/products/mango/0.jpg';
import mango1 from '../Images/products/mango/1.jpg';
import mango2 from '../Images/products/mango/2.jpg';
import mango3 from '../Images/products/mango/3.jpg';
import mango4 from '../Images/products/mango/4.jpg';

import banana0 from '../Images/products/banana/0.jpg';
import banana1 from '../Images/products/banana/1.jpg';
import banana2 from '../Images/products/banana/2.jpg';
import banana3 from '../Images/products/banana/3.jpg';
import banana4 from '../Images/products/banana/4.jpg';

import pineapple0 from '../Images/products/pineapple/0.jpg';
import pineapple1 from '../Images/products/pineapple/1.jpg';
import pineapple2 from '../Images/products/pineapple/2.jpg';
import pineapple3 from '../Images/products/pineapple/3.jpg';
import pineapple4 from '../Images/products/pineapple/4.jpg';

import pitahaya0 from '../Images/products/pitahaya/0.jpg';
import pitahaya1 from '../Images/products/pitahaya/1.jpg';
import pitahaya2 from '../Images/products/pitahaya/2.jpg';
import pitahaya3 from '../Images/products/pitahaya/3.jpg';
import pitahaya4 from '../Images/products/pitahaya/4.jpg';

import variety0 from '../Images/products/variety/0.jpg';
import variety1 from '../Images/products/variety/1.jpg';
import variety2 from '../Images/products/variety/2.jpg';
import variety3 from '../Images/products/variety/3.jpg';

const productImg = {
  mango: [
    { id: nanoid(), img: mango0 },
    { id: nanoid(), img: mango1 },
    { id: nanoid(), img: mango2 },
    { id: nanoid(), img: mango3 },
    { id: nanoid(), img: mango4 },
  ],
  banana: [
    { id: nanoid(), img: banana0 },
    { id: nanoid(), img: banana1 },
    { id: nanoid(), img: banana2 },
    { id: nanoid(), img: banana3 },
    { id: nanoid(), img: banana4 },
  ],
  pineapple: [
    { id: nanoid(), img: pineapple0 },
    { id: nanoid(), img: pineapple1 },
    { id: nanoid(), img: pineapple2 },
    { id: nanoid(), img: pineapple3 },
    { id: nanoid(), img: pineapple4 },
  ],
  pitahaya: [
    { id: nanoid(), img: pitahaya0 },
    { id: nanoid(), img: pitahaya1 },
    { id: nanoid(), img: pitahaya2 },
    { id: nanoid(), img: pitahaya3 },
    { id: nanoid(), img: pitahaya4 },
  ],
  variety: [
    { id: nanoid(), img: variety0 },
    { id: nanoid(), img: variety1 },
    { id: nanoid(), img: variety2 },
    { id: nanoid(), img: variety3 },
  ],
};

const getCoverProductByKey = (key) => {
  return productImg[key];
};

const getThumbnailProductByKey = (key) => {
  return productImg[key][0].img;
};

export { getCoverProductByKey, getThumbnailProductByKey };
