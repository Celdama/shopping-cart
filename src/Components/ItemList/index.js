import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './itemList.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import Item from '../Item';
import { products } from '../../productData';

const ItemList = () => {
  const [controls, ref] = useMotionEffect();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 1,
      },
    },
  };

  const children = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
      transition: {
        transition: 'backInOut',
        duration: 1,
      },
    },
  };

  const content = products.map((item, index) => {
    return (
      <motion.li key={item.id} variants={children}>
        <Item name={item.name} id={index + 1} />
      </motion.li>
    );
  });
  return (
    <Wrapper>
      <Content>
        <motion.ul
          ref={ref}
          variants={container}
          animate={controls}
          initial='hidden'
        >
          {content}
        </motion.ul>
      </Content>
    </Wrapper>
  );
};

export default ItemList;
