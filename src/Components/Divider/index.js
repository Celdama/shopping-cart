import React from 'react';
import { Wrapper, Content, DividerBox, Title } from './divider.style';
import { useMotionEffect } from '../../hooks/useMotionEffect';
import {
  getDividerTitleEffect,
  getDividerEffect,
} from '../../Helpers/motionEffect';

const Divider = () => {
  const [controls, ref] = useMotionEffect();

  return (
    <Wrapper>
      <Content>
        <Title
          ref={ref}
          variants={getDividerTitleEffect()}
          animate={controls}
          initial='hidden'
        >
          available in
        </Title>
        <DividerBox
          ref={ref}
          variants={getDividerEffect()}
          animate={controls}
          initial='hidden'
        />
      </Content>
    </Wrapper>
  );
};

export default Divider;
