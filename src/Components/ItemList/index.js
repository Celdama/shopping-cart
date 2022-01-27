import React from 'react';
import { Wrapper, Content } from './itemList.style';
import Item from '../Item';

const ItemList = () => {
  const items = ['mango', 'banana', 'pineapple', 'pitahaya', 'variety'];

  const content = items.map((item, index) => {
    return <Item key={index} name={item} id={index + 1} />;
  });
  return (
    <Wrapper>
      <Content>
        <ul>{content}</ul>
      </Content>
    </Wrapper>
  );
};

export default ItemList;
