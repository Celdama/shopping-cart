import React from 'react';
import Arrow from '../../Images/arrow.svg';
import { Link } from 'react-router-dom';

const Item = ({ name, id }) => {
  return (
    <div>
      <Link className='link' to={`product/${name}`}>
        <span className='index'>Ø{id}</span>
        <div>
          <span className='savour'>{name}</span>
          <img src={Arrow} alt={`product ${name}`} />
        </div>
      </Link>
    </div>
  );
};

export default Item;
