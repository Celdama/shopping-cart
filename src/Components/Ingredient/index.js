import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, ContentQuestion, ContentAnswer } from './ingredient.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';

const Ingredient = ({ text, repeat, name }) => {
  const [controls, ref] = useMotionEffect();

  const fromRightToLeft = {
    hidden: {
      x: 0,
    },
    visible: {
      x: name ? -990 : -400,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  const fromLeftToRight = {
    hidden: {
      x: -400,
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  const renderText = () => {
    const row = [];
    for (let i = 0; i < repeat; i++) {
      if (name) {
        row.push(
          <motion.div
            key={i}
            ref={ref}
            variants={fromRightToLeft}
            animate='visible'
          >
            <p className=''>{text}</p>
          </motion.div>
        );
      } else {
        row.push(
          i === 3 ? (
            <motion.div
              key={i}
              ref={ref}
              variants={i % 2 === 0 ? fromRightToLeft : fromLeftToRight}
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
              variants={i % 2 === 0 ? fromRightToLeft : fromLeftToRight}
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
        <h3 style={{ textAlign: 'center' }}>
          <span>{name ? 'Ingredient(s)' : 'Number of'}</span>
          <span className='serif capitalize'>
            {name ? `${name}` : ' ingredients:'}
          </span>
        </h3>
      </ContentQuestion>
      <ContentAnswer>{renderText()}</ContentAnswer>
    </Wrapper>
  );
};

export default Ingredient;
