import React from 'react';
import { Wrapper, Content } from './itemList.style';
import Arrow from '../../Images/arrow.svg';

const ItemList = () => {
  return (
    <Wrapper>
      <Content>
        <ul>
          <li>
            <span className='index'>o1</span>
            <div>
              <span className='savour'>mango</span>
              <img src={Arrow} alt='' />
            </div>
          </li>
          <li>
            <span className='index'>o2</span>
            <div>
              <span className='savour'>banana</span>
              <img src={Arrow} alt='' />
            </div>
          </li>
          <li>
            <span className='index'>o3</span>
            <div>
              <span className='savour'>pineapple</span>
              <img src={Arrow} alt='' />
            </div>
          </li>
          <li>
            <span className='index'>o4</span>
            <div>
              <span className='savour test'>pitahaya</span>
              <img src={Arrow} alt='' />
            </div>
          </li>
          <li>
            <span className='index'>o5</span>
            <div>
              <span className='savour'>variety</span>
              <img src={Arrow} alt='' />
            </div>
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default ItemList;
