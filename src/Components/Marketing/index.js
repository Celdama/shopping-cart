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

  const style = {
    hidden: {
      height: '1%',
    },
    visible: {
      height: '100%',
      transition: {
        transition: 'ease',
        duration: 0.7,
      },
    },
  };

  return (
    <Wrapper>
      <Content>
        <div className='main-content'>
          <p className='quote'>
            <span>i finished the</span>
            <span>box and regret</span>
            <span>nothing.</span>
          </p>
        </div>
        <div className='sub-content'>
          <div className='container'>
            <div className='left'>
              <p>
                <span>so crunchy i get</span>
                <span>noise complaints.</span>
              </p>
            </div>
            <motion.div
              className='divider'
              ref={ref}
              variants={style}
              animate={controls}
              initial='hidden'
            ></motion.div>
            <div className='right'>
              <p>
                <span>this is what "fruit</span>
                <span>snacks" should have</span>
                <span>always been</span>
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Marketing;
