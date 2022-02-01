import React from 'react';
import { Wrapper, Content } from './productDetailCompare.style';

const ProductDetailCompare = ({ title, sugar, calories, tala }) => {
  return (
    <Wrapper tala={tala}>
      <Content>
        <h2>{title}</h2>
        <div className='container'>
          <div className='sugar'>
            <span className='value'>{sugar}g</span>
            <span>Sugars</span>
          </div>
          <div className='calories'>
            <span className='value'>{calories}</span>
            <span>Calories</span>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailCompare;
