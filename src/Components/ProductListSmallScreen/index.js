import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  products,
  handleCurrentProduct,
  currentProduct,
}) => {
  const [collapseDropDown, setCollapseDropDown] = useState(true);

  const toggleDropDown = () => {
    setCollapseDropDown(!collapseDropDown);
  };

  const handleCurrent = (product) => {
    setCollapseDropDown(!collapseDropDown);
    handleCurrentProduct(product);
  };

  const productsListItems = products.map((product) => {
    const { name, id, color } = product;
    const isCurrent = name === currentProduct.name;
    return (
      <ProductListItems
        key={id}
        style={isCurrent ? { borderBottom: `2px solid ${color}` } : {}}
        onClick={() => handleCurrent(product)}
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

ProductListSmallScreen.propTypes = {
  handleCurrentProduct: PropTypes.func,
  currentProduct: PropTypes.object,
  products: PropTypes.array,
};

export default ProductListSmallScreen;
