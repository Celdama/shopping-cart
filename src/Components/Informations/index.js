import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrapper, Content, Text } from './infomations.style';

const Informations = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const style1 = {
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
        transition: 'backInOut',
        duration: 0.8,
      },
    },
  };

  const style2 = {
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
        transition: 'backInOut',
        duration: 1,
      },
    },
  };

  const style3 = {
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
        transition: 'backInOut',
        duration: 1.2,
      },
    },
  };

  return (
    <Wrapper>
      <Content>
        <Text>
          <motion.span
            ref={ref}
            variants={style1}
            animate={controls}
            initial='hidden'
          >
            We're bringing fruit snacks back to{' '}
          </motion.span>
          <motion.span
            ref={ref}
            variants={style2}
            animate={controls}
            initial='hidden'
          >
            their roots with <span className='serif'>perfectly ripe fruit</span>{' '}
          </motion.span>
          <motion.span
            ref={ref}
            variants={style3}
            animate={controls}
            initial='hidden'
          >
            <span className='serif'>bursting with flavor.</span>
          </motion.span>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Informations;
