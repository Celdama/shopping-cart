import React from 'react';
import {
  Wrapper,
  Content,
  Title,
  ContentContainer,
} from './productDetailCompare.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import {
  getContainerInstaEffect,
  getChildrenInstaEffect,
} from '../../Helpers/shopPageMotionEffect';

const ProductDetailCompare = ({ title, sugar, calories, tala }) => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper tala={tala}>
      <Content
        variants={getContainerInstaEffect()}
        animate={controls}
        initial='hidden'
      >
        <Title ref={ref} variants={getChildrenInstaEffect()}>
          {title}
        </Title>
        <ContentContainer
          variants={getChildrenInstaEffect()}
          className='container'
        >
          <div className='sugar'>
            <span className='value'>{sugar}g</span>
            <span>Sugars</span>
          </div>
          <div className='calories'>
            <span className='value'>{calories}</span>
            <span>Calories</span>
          </div>
        </ContentContainer>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailCompare;
