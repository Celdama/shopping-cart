import React from 'react';
import Arrow from '../../Images/arrow.svg';
import { Content } from './item.style';

const Item = ({ name, id }) => {
  console.log(name);
  return (
    <Content>
      <span className='index'>Ø{id}</span>
      <div>
        <span className='savour'>{name}</span>
        <img src={Arrow} alt={`product ${name}`} />
      </div>
    </Content>
  );
};

export default Item;
