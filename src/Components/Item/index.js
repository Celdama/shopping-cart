import React from 'react';
import Arrow from '../../Images/arrow.svg';

const Item = ({ name, id }) => {
  return (
    <div>
      <span className='index'>Ø{id}</span>
      <div>
        <span className='savour'>{name}</span>
        <img src={Arrow} alt={`product ${name}`} />
      </div>
    </div>
  );
};

export default Item;
