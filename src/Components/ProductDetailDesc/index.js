import React from 'react';
import { motion } from 'framer-motion';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { Wrapper, Content, Button } from './productDetailDesc.style';

const ProductDetailDesc = ({
  price,
  desc,
  handleCurrentProduct,
  addProductToCart,
}) => {
  const [controls, ref] = useMotionEffect();

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
      <Content
        ref={ref}
        variants={container}
        animate={controls}
        initial='hidden'
      >
        <motion.p variants={children} className='product-price'>
          $ {price}.00 USD
        </motion.p>
        <motion.p variants={children} className='product-desc'>
          {desc}
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
