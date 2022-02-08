import React from 'react';
import { motion } from 'framer-motion';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import {
  getVerticalDividerEffect,
  getHorizontalDividerEffect,
  getContainerMarketingEffect,
  getSubContainerMarketingEffect,
  getChildrenMarketingEffect,
} from '../../Helpers/motionEffect';

import {
  Wrapper,
  Content,
  MainContent,
  HorizontalDivider,
  Quote,
  SubContent,
  SubContentContainer,
  VerticalDivider,
} from './marketing.style';

const Marketing = () => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper>
      <Content>
        <MainContent>
          <Quote
            variants={getContainerMarketingEffect()}
            animate={controls}
            initial='hidden'
          >
            <motion.span variants={getChildrenMarketingEffect()}>
              i finished the
            </motion.span>
            <motion.span variants={getChildrenMarketingEffect()}>
              box & regret
            </motion.span>
            <motion.span variants={getChildrenMarketingEffect()}>
              nothing.
            </motion.span>
          </Quote>
        </MainContent>
        <HorizontalDivider
          ref={ref}
          variants={getHorizontalDividerEffect()}
          animate={controls}
          initial='hidden'
        ></HorizontalDivider>
        <SubContent>
          <SubContentContainer>
            <div className='left-side'>
              <motion.p
                variants={getSubContainerMarketingEffect()}
                animate={controls}
                initial='hidden'
              >
                <motion.span variants={getChildrenMarketingEffect()}>
                  so crunchy i get
                </motion.span>
                <motion.span variants={getChildrenMarketingEffect()}>
                  noise complaints.
                </motion.span>
              </motion.p>
            </div>
            <VerticalDivider
              variants={getVerticalDividerEffect()}
              animate={controls}
              initial='hidden'
            ></VerticalDivider>
            <div className='right-side'>
              <motion.p
                variants={getSubContainerMarketingEffect()}
                animate={controls}
                initial='hidden'
              >
                <motion.span variants={getChildrenMarketingEffect()}>
                  this is what "fruit
                </motion.span>
                <motion.span variants={getChildrenMarketingEffect()}>
                  snacks" should have
                </motion.span>
                <motion.span variants={getChildrenMarketingEffect()}>
                  always been
                </motion.span>
              </motion.p>
            </div>
          </SubContentContainer>
        </SubContent>
        <HorizontalDivider
          variants={getHorizontalDividerEffect()}
          animate={controls}
          initial='hidden'
        ></HorizontalDivider>
      </Content>
    </Wrapper>
  );
};

export default Marketing;
