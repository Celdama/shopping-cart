import React, { useState } from 'react';
import { Wrapper, Content, Title } from './productListSmallScreen.style';
import { FaCaretDown } from 'react-icons/fa';

const ProductListSmallScreen = ({
  allProducts,
  handleCurrentProduct,
  currentProduct,
  color,
}) => {
  const [collapseDropDown, setCollapseDropDown] = useState(true);

  const toggleDropDown = () => {
    setCollapseDropDown(!collapseDropDown);
  };

  const handleCurrent = (productName) => {
    setCollapseDropDown(!collapseDropDown);
    handleCurrentProduct(productName);
  };

  const productsList = allProducts.map(({ name, id }) => {
    const isCurrent = name === currentProduct.name;
    return (
      <li
        key={id}
        style={isCurrent ? { borderBottom: `2px solid ${color}` } : {}}
        onClick={() => handleCurrent(name)}
      >
        {name}
      </li>
    );
  });

  return (
    <Wrapper>
      <Content>
        <div className='dropdown'>
          <Title>{currentProduct.name}</Title>
          <span onClick={toggleDropDown}>
            <FaCaretDown className={collapseDropDown ? 'icon' : 'icon down'} />
          </span>
        </div>
        <ul className={collapseDropDown ? 'collapse' : 'not-collapse'}>
          {productsList}
        </ul>
        <p>$29.00 USD</p>
      </Content>
    </Wrapper>
  );
};

export default ProductListSmallScreen;
