import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrapper, Content } from './itemList.style';
import Item from '../Item';

const ItemList = () => {
  const items = ['mango', 'banana', 'pineapple', 'pitahaya', 'variety'];

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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

  const itemLi = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
      transition: {
        type: 'inertia',
        velocity: 20,
      },
    },
  };

  const content = items.map((item, index) => {
    return (
      <motion.li variants={itemLi}>
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
