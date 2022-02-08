import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './itemList.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import Item from '../Item';
import {
  getContainerBasicMotionEffect,
  getChildrenItemListEffect,
} from '../../Helpers/motionEffect';
import { products } from '../../productData';

const ItemList = () => {
  const [controls, ref] = useMotionEffect();

  const content = products.map((item, index) => {
    const { id, name } = item;
    return (
      <motion.li key={id} variants={getChildrenItemListEffect()}>
        <Item name={name} id={id} index={index + 1} />
      </motion.li>
    );
  });

  return (
    <Wrapper>
      <Content>
        <motion.ul
          ref={ref}
          variants={getContainerBasicMotionEffect(0, 1, 0, 1.5, 1)}
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
