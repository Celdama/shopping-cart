import mango0 from '../Images/products/mango/0.jpg';
import mango1 from '../Images/products/mango/1.jpg';
import mango2 from '../Images/products/mango/2.jpg';
import mango3 from '../Images/products/mango/3.jpg';
import mango4 from '../Images/products/mango/4.jpg';

import banana from '../Images/products/banana/0.jpg';
import pineapple from '../Images/products/pineapple/0.jpg';
import pitahaya from '../Images/products/pitahaya/0.jpg';
import variety from '../Images/products/variety/0.jpg';

const coverImage = {
  mango: [mango0, mango1, mango2, mango3, mango4],
  banana: [banana],
  pineapple: [pineapple],
  pitahaya: [pitahaya],
  variety: [variety],
};

const getCoverProductByKey = (key) => {
  return coverImage[key];
};

export default getCoverProductByKey;
