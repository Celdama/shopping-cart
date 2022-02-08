import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './itemList.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import Item from '../Item';
import {
  getContainerBasicMotionEffect,
  getChildrenItemListEffect,
} from '../../Helpers/shopPageMotionEffect';
import { products } from '../../productData';

const ItemList = () => {
  const [controls, ref] = useMotionEffect();

  const content = products.map((item, index) => {
    return (
      <motion.li key={item.id} variants={getChildrenItemListEffect()}>
        <Item name={item.name} id={item.id} index={index + 1} />
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
