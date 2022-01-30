import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './itemList.style';
import { useMotionEffectWithChildren } from '../../hooks/useMotionEffectWithChildren';
import Item from '../Item';

const ItemList = () => {
  const [controls, ref] = useMotionEffectWithChildren();

  const items = ['mango', 'banana', 'pineapple', 'pitahaya', 'variety'];

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

  const content = items.map((item, index) => {
    return (
      <motion.li variants={children}>
        <Item key={index} name={item} id={index + 1} />
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
