import React from 'react';
import { Wrapper, Content, Button } from './productDetailDesc.style';

const ProductDetailDesc = ({ price, desc, handleCurrentProduct }) => {
  return (
    <Wrapper>
      <Content>
        <p className='product-price'>$ {price}.00 USD</p>
        <p className='product-desc'>{desc}</p>
        <p className='product-marketing'>
          can't decide which flavor is right for you ? <br /> try our{' '}
          <span onClick={() => handleCurrentProduct('variety')}>
            sample pack
          </span>
        </p>
        <Button>add to card</Button>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailDesc;
