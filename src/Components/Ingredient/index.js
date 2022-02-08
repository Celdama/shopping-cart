import React from 'react';
import { motion } from 'framer-motion';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import {
  getEffectFromLeftToRight,
  getEffectFromRightToLeft,
} from '../../Helpers/motionEffect';
import { Wrapper, ContentQuestion, ContentAnswer } from './ingredient.style';

const Ingredient = ({ text, repeat, name }) => {
  const [controls, ref] = useMotionEffect();

  const renderText = () => {
    const row = [];
    for (let i = 0; i < repeat; i++) {
      if (name) {
        row.push(
          <motion.div
            key={i}
            ref={ref}
            variants={getEffectFromRightToLeft()}
            animate='visible'
          >
            <p>{text}</p>
          </motion.div>
        );
      } else {
        row.push(
          i === 3 ? (
            <motion.div
              key={i}
              ref={ref}
              variants={
                i % 2 === 0
                  ? getEffectFromRightToLeft()
                  : getEffectFromLeftToRight()
              }
              animate={controls}
              initial='hidden'
            >
              <p className='odd'>{text}</p>
              <p>{text}</p>
              <p className='odd'>{text}</p>
              <p>{text}</p>
              <p className='odd'>{text}</p>
              <p>{text}</p>
            </motion.div>
          ) : (
            <motion.div
              key={i}
              variants={
                i % 2 === 0
                  ? getEffectFromRightToLeft()
                  : getEffectFromLeftToRight()
              }
              animate={controls}
              initial='hidden'
            >
              <p className='odd'>{text}</p>
              <p>{text}</p>
              <p className='odd'>{text}</p>
              <p>{text}</p>
              <p className='odd'>{text}</p>
              <p>{text}</p>
            </motion.div>
          )
        );
      }
    }
    return row;
  };

  return (
    <Wrapper>
      <ContentQuestion>
        <h3>
          <span>{name ? 'Ingredient(s)' : 'Number of'}</span>
          <span className='serif capitalize'>
            {name ? name : ' ingredients:'}
          </span>
        </h3>
      </ContentQuestion>
      <ContentAnswer>{renderText()}</ContentAnswer>
    </Wrapper>
  );
};

export default Ingredient;
