import React from 'react';
import { Wrapper, Content } from './home.style';

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <div className='text-content'>
          <div className='left'>
            <h1>TALA</h1>
            <p>
              <span>An entirely</span> new fruit snack — made of fruit.
            </p>
          </div>
          <div className='right'>
            <div>
              <p>one ingredient.</p>
              <p>one incredible crunch.</p>
            </div>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Home;
