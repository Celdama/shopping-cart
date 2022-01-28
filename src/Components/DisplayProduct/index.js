import React from 'react';
import { Wrapper, Content } from './displayProduct.style';
import Product1 from '../../Images/products/01.png';
import Product2 from '../../Images/products/02.png';
import Product3 from '../../Images/products/03.png';
import Product4 from '../../Images/products/04.png';
import Product5 from '../../Images/products/05.png';

const DisplayProduct = () => {
  return (
    <Wrapper>
      <Content>
        <h3>Snack better.</h3>
        <div className='products'>
          <div>
            <img className='small ' src={Product1} alt='' />
          </div>
          <div>
            <img className='medium ' src={Product2} alt='' />
          </div>
          <div>
            <img className='large' src={Product3} alt='' />
          </div>
          <div style={{ zIndex: -1 }}>
            <img className='medium right' src={Product4} alt='' />
          </div>
          <div style={{ zIndex: -2 }}>
            <img className='small' src={Product5} alt='' />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default DisplayProduct;
