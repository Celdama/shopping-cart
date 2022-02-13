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
  allProducts,
  handleCurrentProduct,
  currentProduct,
}) => {
  const [collapseDropDown, setCollapseDropDown] = useState(true);

  const toggleDropDown = () => {
    setCollapseDropDown(!collapseDropDown);
  };

  const handleCurrent = (productName) => {
    setCollapseDropDown(!collapseDropDown);
    handleCurrentProduct(productName);
  };

  const productsListItems = allProducts.map((product) => {
    const isCurrent = product.name === currentProduct.name;
    return (
      <ProductListItems
        key={product.id}
        style={isCurrent ? { borderBottom: `2px solid ${product.color}` } : {}}
        onClick={() => handleCurrent(product)}
      >
        {product.name}
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
  allProducts: PropTypes.array,
};

export default ProductListSmallScreen;
