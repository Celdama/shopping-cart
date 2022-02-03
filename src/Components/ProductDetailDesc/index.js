import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content, Button } from './productDetailDesc.style';
import {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
} from '../../Helpers/shopPageMotionEffect';

const ProductDetailDesc = ({
  handleCurrentProduct,
  addProductToCart,
  currentProduct,
}) => {
  const { id, price, description } = currentProduct;

  return (
    <Wrapper>
      <Content
        key={id}
        variants={getContainerBasicMotionEffect(0, 1, 0, 0.2, 0.2)}
        animate='visible'
        initial='hidden'
      >
        <motion.p
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          className='product-price'
        >
          $ {price}.00 USD
        </motion.p>
        <motion.p
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          className='product-desc'
        >
          {description}
        </motion.p>
        <motion.p
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          className='product-marketing'
        >
          can't decide which flavor is right for you ? <br /> try our{' '}
          <span onClick={() => handleCurrentProduct('variety')}>
            sample pack
          </span>
        </motion.p>
        <Button
          variants={getChildrenBasicMotionEffect(
            50,
            0,
            0,
            1,
            0,
            'backInOut',
            0.5
          )}
          onClick={addProductToCart}
        >
          add to card
        </Button>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailDesc;
