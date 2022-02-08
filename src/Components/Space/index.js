import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Wrapper, Content, Title, Smiley } from './space.style';
import SmileySrc from '../../Images/smiley.svg';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import {
  getContainerTitleSpaceEffect,
  getContainerParaSpaceEffect,
  getTextSpaceEffect,
} from '../../Helpers/motionEffect';

const Space = ({ productPage }) => {
  const [controls, ref] = useMotionEffect();

  const contentHomePage = (
    <>
      <Title
        ref={ref}
        variants={getContainerTitleSpaceEffect()}
        animate={controls}
        initial='hidden'
      >
        <motion.span variants={getTextSpaceEffect()}>
          Guil-free satisfaction for
        </motion.span>
        <motion.span variants={getTextSpaceEffect()} className='serif'>
          every occasion.
        </motion.span>
      </Title>
      <motion.div
        ref={ref}
        variants={getContainerParaSpaceEffect()}
        animate={controls}
        initial='hidden'
      >
        <motion.p variants={getTextSpaceEffect()}>
          Yes you can actually eat TALA in space.
        </motion.p>
        <motion.p variants={getTextSpaceEffect()}>
          Now you just have to figure out how to get there.
        </motion.p>
      </motion.div>
      <Smiley src={SmileySrc} alt='smiley' />
    </>
  );

  const contentProductPage = (
    <Title
      ref={ref}
      variants={getContainerTitleSpaceEffect()}
      animate={controls}
      initial='hidden'
    >
      <motion.span variants={getTextSpaceEffect()}>
        Tastes just like real fruit...
      </motion.span>
      <motion.span variants={getTextSpaceEffect()} className='serif'>
        because it is real fruit.
      </motion.span>
    </Title>
  );

  return (
    <Wrapper>
      <Content>{productPage ? contentProductPage : contentHomePage}</Content>
    </Wrapper>
  );
};

Space.propTypes = {
  productPage: PropTypes.bool,
};

export default Space;
