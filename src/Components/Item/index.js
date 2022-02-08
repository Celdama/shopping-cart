import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Arrow from '../../Images/arrow.svg';
import { Wrapper, ContentSavour, Savour, ArrowIcon } from './item.style';

const Item = ({ name, id, index }) => {
  return (
    <Wrapper>
      <Link className='link' state={{ id }} to={'shop'}>
        <span className='index'>Ø{index}</span>
        <ContentSavour>
          <Savour className='savour'>{name}</Savour>
          <ArrowIcon className='arrow' src={Arrow} alt={`product ${name}`} />
        </ContentSavour>
      </Link>
    </Wrapper>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Item;
