import React from 'react';
import { motion } from 'framer-motion';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { Wrapper, Content, Text } from './informations.style';
import {
  getContainerBasicMotionEffect,
  getChildrenBasicMotionEffect,
} from '../../Helpers/shopPageMotionEffect';

const Informations = () => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper>
      <Content>
        <Text>
          <motion.div
            ref={ref}
            variants={getContainerBasicMotionEffect(0, 1, 0, 0.2, 0.4)}
            animate={controls}
            initial='hidden'
          >
            <motion.div
              variants={getChildrenBasicMotionEffect(
                0,
                0,
                5,
                1,
                0.2,
                'backInOut',
                1
              )}
            >
              <p>We're bringing fruit snacks back to </p>
            </motion.div>
            <motion.div
              variants={getChildrenBasicMotionEffect(
                0,
                0,
                5,
                1,
                0.4,
                'backInOut',
                1
              )}
            >
              <p>
                their roots with{' '}
                <span className='serif'>perfectly ripe fruit</span>{' '}
              </p>
            </motion.div>
            <motion.div
              variants={getChildrenBasicMotionEffect(
                0,
                0,
                5,
                1,
                0.6,
                'backInOut',
                1
              )}
            >
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
