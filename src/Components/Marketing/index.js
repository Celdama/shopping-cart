import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Wrapper, Content } from './marketing.style';

const Marketing = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const verticalStyle = {
    hidden: {
      height: '0%',
      opacity: 0,
    },
    visible: {
      height: '100%',
      opacity: 1,
      transition: {
        delay: 0.6,
        transition: 'ease',
        duration: 0.7,
      },
    },
  };

  const horizontalStyle = {
    hidden: {
      width: '0%',
    },
    visible: {
      width: '100%',
      transition: {
        transition: 'ease',
        duration: 1.3,
      },
    },
  };

  const mainContainerStyle = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const subContainerStyle = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textChildrenStyle = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 5,
      opacity: 1,
    },
  };

  return (
    <Wrapper>
      <Content>
        <div className='main-content'>
          <motion.p
            ref={ref}
            variants={mainContainerStyle}
            animate={controls}
            initial='hidden'
            className='quote'
          >
            <motion.span variants={textChildrenStyle}>
              i finished the
            </motion.span>
            <motion.span variants={textChildrenStyle}>
              box and regret
            </motion.span>
            <motion.span variants={textChildrenStyle}>nothing.</motion.span>
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          variants={horizontalStyle}
          animate={controls}
          initial='hidden'
          className='horizontal-divider'
        ></motion.div>
        <div className='sub-content'>
          <div className='container'>
            <div className='left'>
              <motion.p
                ref={ref}
                variants={subContainerStyle}
                animate={controls}
                initial='hidden'
              >
                <motion.span variants={textChildrenStyle}>
                  so crunchy i get
                </motion.span>
                <motion.span variants={textChildrenStyle}>
                  noise complaints.
                </motion.span>
              </motion.p>
            </div>
            <motion.div
              className='divider'
              ref={ref}
              variants={verticalStyle}
              animate={controls}
              initial='hidden'
            ></motion.div>
            <div className='right'>
              <motion.p
                ref={ref}
                variants={subContainerStyle}
                animate={controls}
                initial='hidden'
              >
                <motion.span variants={textChildrenStyle}>
                  this is what "fruit
                </motion.span>
                <motion.span variants={textChildrenStyle}>
                  snacks" should have
                </motion.span>
                <motion.span variants={textChildrenStyle}>
                  always been
                </motion.span>
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          ref={ref}
          variants={horizontalStyle}
          animate={controls}
          initial='hidden'
          className='horizontal-divider'
        ></motion.div>
      </Content>
    </Wrapper>
  );
};

export default Marketing;
