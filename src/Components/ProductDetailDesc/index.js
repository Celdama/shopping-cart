import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content, Button } from './productDetailDesc.style';

const ProductDetailDesc = ({
  handleCurrentProduct,
  addProductToCart,
  currentProduct,
}) => {
  const { id, price, description } = currentProduct;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const children = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        transition: 'backInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <Wrapper>
      <Content key={id} variants={container} animate='visible' initial='hidden'>
        <motion.p variants={children} className='product-price'>
          $ {price}.00 USD
        </motion.p>
        <motion.p variants={children} className='product-desc'>
          {description}
        </motion.p>
        <motion.p variants={children} className='product-marketing'>
          can't decide which flavor is right for you ? <br /> try our{' '}
          <span onClick={() => handleCurrentProduct('variety')}>
            sample pack
          </span>
        </motion.p>
        <Button variants={children} onClick={addProductToCart}>
          add to card
        </Button>
      </Content>
    </Wrapper>
  );
};

export default ProductDetailDesc;
