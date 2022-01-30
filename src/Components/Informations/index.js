import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Content, Text } from './informations.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const Informations = () => {
  const [controls, ref] = useMotionEffect();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
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

  return (
    <Wrapper>
      <Content>
        <Text>
          <motion.div
            ref={ref}
            variants={container}
            animate={controls}
            initial='hidden'
          >
            <motion.div variants={children}>
              <p>We're bringing fruit snacks back to </p>
            </motion.div>
            <motion.div variants={children}>
              <p>
                their roots with{' '}
                <span className='serif'>perfectly ripe fruit</span>{' '}
              </p>
            </motion.div>
            <motion.div variants={children}>
              <p>
                <span className='serif'>bursting with flavor.</span>
              </p>
            </motion.div>
          </motion.div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Informations;
