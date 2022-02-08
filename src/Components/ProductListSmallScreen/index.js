import React, { useState } from 'react';
import {
  Wrapper,
  Content,
  Dropdown,
  Title,
  ProductList,
  ProductListItems,
} from './productListSmallScreen.style';
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

  const productsListItems = allProducts.map(({ name, id }) => {
    const isCurrent = name === currentProduct.name;
    return (
      <ProductListItems
        key={id}
        style={isCurrent ? { borderBottom: `2px solid ${color}` } : {}}
        onClick={() => handleCurrent(name)}
      >
        {name}
      </ProductListItems>
    );
  });

  const { name } = currentProduct;

  return (
    <Wrapper>
      <Content>
        <Dropdown>
          <Title>{name}</Title>
          <span onClick={toggleDropDown}>
            <FaCaretDown className={collapseDropDown ? 'icon' : 'icon down'} />
          </span>
        </Dropdown>
        <ProductList className={collapseDropDown ? 'collapse' : 'not-collapse'}>
          {productsListItems}
        </ProductList>
        <p className='price'>$29.00 USD</p>
      </Content>
    </Wrapper>
  );
};

export default ProductListSmallScreen;
