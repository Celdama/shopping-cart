import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './displayProduct.style';
import Product1 from '../../Images/products/01.png';
import Product2 from '../../Images/products/02.png';
import Product3 from '../../Images/products/03.png';
import Product4 from '../../Images/products/04.png';
import Product5 from '../../Images/products/05.png';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { Link } from 'react-router-dom';

const DisplayProduct = () => {
  const [controls, ref] = useMotionEffect();

  const titleStyle = {
    hidden: {
      y: 50,
      color: '#232025',
      opacity: 0,
    },
    visible: {
      y: 0,
      color: '#d5cdc4',
      opacity: 1,
      transition: {
        transition: 'ease',
        duration: 0.4,
      },
    },
  };

  const productStyle = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        transition: 'ease',
        duration: 0.4,
      },
    },
  };

  return (
    <Wrapper>
      <Content>
        <motion.h3 variants={titleStyle} animate={controls} initial='hidden'>
          Snack better.
        </motion.h3>
        <motion.div
          ref={ref}
          variants={productStyle}
          animate={controls}
          initial='hidden'
          className='products'
        >
          <div>
            <Link to={'shop'} state={{ id: 'aa001' }}>
              <img className='small' src={Product1} alt='' />
            </Link>
          </div>
          <div>
            <Link to={'shop'} state={{ id: 'ab002' }}>
              <img className='medium' src={Product2} alt='' />
            </Link>
          </div>
          <div>
            <Link to={'shop'} state={{ id: 'ac003' }}>
              <img className='large' src={Product3} alt='' />
            </Link>
          </div>
          <div style={{ zIndex: -1 }}>
            <Link to={'shop'} state={{ id: 'ad004' }}>
              <img className='medium right' src={Product4} alt='' />
            </Link>
          </div>
          <div style={{ zIndex: -2 }}>
            <Link to={'shop'} state={{ id: 'ae005' }}>
              <img className='small' src={Product5} alt='' />
            </Link>
          </div>
        </motion.div>
      </Content>
    </Wrapper>
  );
};

export default DisplayProduct;
