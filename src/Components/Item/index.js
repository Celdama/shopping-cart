import React from 'react';
import Arrow from '../../Images/arrow.svg';
import { Link } from 'react-router-dom';

const Item = ({ name, id, index }) => {
  return (
    <div>
      <Link className='link' state={{ id }} to={`product`}>
        <span className='index'>Ø{index}</span>
        <div>
          <span className='savour'>{name}</span>
          <img src={Arrow} alt={`product ${name}`} />
        </div>
      </Link>
    </div>
  );
};

export default Item;
