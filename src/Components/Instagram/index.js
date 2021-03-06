import React from 'react';
import { motion } from 'framer-motion';
import {
  getContainerInstaEffect,
  getChildrenInstaEffect,
} from '../../Helpers/motionEffect';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import { Wrapper, Content, InstagramItem } from './instagram.style';

const Instagram = () => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper>
      <Content>
        <div className='title'>
          <p>Follow us on instagram for more</p>
          <p>@tala</p>
        </div>
        <motion.div
          ref={ref}
          variants={getContainerInstaEffect()}
          animate={controls}
          initial='hidden'
          className='photos'
        >
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80'
              }
            />
          </motion.div>
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
              }
            />
          </motion.div>
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
            />
          </motion.div>
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1558364014-629f5d7d40b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              }
            />
          </motion.div>
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80'
              }
            />
          </motion.div>
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1481349758547-36a0382e3394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NjM3NTd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </motion.div>
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NzI2MjAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
            />
          </motion.div>
          <InstagramItem />
          <motion.div variants={getChildrenInstaEffect()}>
            <InstagramItem
              img={
                'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8ODgxMTQ0NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              }
            />
          </motion.div>
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
          <InstagramItem />
        </motion.div>
      </Content>
    </Wrapper>
  );
};

export default Instagram;
