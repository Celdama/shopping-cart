import React from 'react';
import { Wrapper, Content } from './home.style';
import Hero from '../Hero';
import Informations from '../Informations';
import Divider from '../Divider';
import ItemList from '../ItemList';
import Marketing from '../Marketing';
import Space from '../Space';
import Ingredient from '../Ingredient';
import Questions from '../Questions';
import DisplayProduct from '../DisplayProduct';
import Instagram from '../Instagram';

const Home = () => {
  return (
    <>
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
      <Hero />
      <Informations />
      <Divider />
      <ItemList />
      <Marketing />
      <Space productPage={false} />
      <Ingredient text='ONE' repeat={6} />
      <Questions />
      <DisplayProduct />
      <Instagram />
    </>
  );
};

export default Home;
