import React, { useState } from 'react';
import Question from '../Question';
import { Wrapper, Content, BananaGif, SyrupGif } from './questions.style';
import Banana from '../../Images/bananas.gif';
import Syrup from '../../Images/syrup.gif';

const Questions = () => {
  const [positionY, setPositionY] = useState(0);
  const [positionX, setPositionX] = useState(0);

  const showBanana = (e) => {
    let react = e.target.getBoundingClientRect();
    let x = e.clientX - react.left;
    let y = e.clientY - react.top;
    setPositionX(x);
    setPositionY(y);
  };

  console.log('Left? : ' + positionX + ' ; Top? : ' + positionY + '.');

  return (
    <Wrapper>
      <Content>
        <Question />
        <div className='answers'>
          <div className='yes-container' onMouseMove={showBanana}>
            <p className='yes'>Yes</p>
            <BananaGif top={positionY} left={positionX} src={Banana} alt='' />
          </div>
          <div className='no-container' onMouseMove={showBanana}>
            <p className='no'>No</p>
            <SyrupGif top={positionY} left={positionX} src={Syrup} alt='' />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Questions;
