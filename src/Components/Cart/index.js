import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CartHeader from '../CartHeader';
import { CartItemStore } from '../CartItem';
import CartCheckout from '../CartCheckout';
import getSubTotal from '../../Helpers/subTotalOrder';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';

import {
  Wrapper,
  Content,
  Item,
  ContentCart,
  CartItemsContainer,
  ListItems,
} from './cart.style';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../Store/selectors/productsSelector';

export const Cart = ({ products, displayCart, handleDisplayCart }) => {
  const cardItemsList = products.map((product) => {
    const { id, quantity, name } = product;

    return (
      <Item key={id} quantity={quantity}>
        {!!quantity && (
          <CartItemStore
            thumbnail={getThumbnailProductByKey(name)}
            product={product}
          />
        )}
      </Item>
    );
  });

  const subTotal = getSubTotal(products);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <CartHeader handleDisplayCart={handleDisplayCart} />
        <ContentCart>
          <CartItemsContainer>
            {subTotal ? (
              <div>
                <ListItems>
                  <ul>{cardItemsList}</ul>
                </ListItems>
                <CartCheckout
                  subTotal={subTotal}
                  handleDisplayCart={handleDisplayCart}
                />
              </div>
            ) : (
              <p className='empty-product'>sorry, there's nothing here yet.</p>
            )}
          </CartItemsContainer>
        </ContentCart>
      </Content>
    </Wrapper>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  displayCart: PropTypes.bool,
  handleDisplayCart: PropTypes.func,
};

export const CartStore = ({ displayCart, handleDisplayCart }) => {
  const products = useSelector(productsSelector);

  return (
    <Cart
      products={products}
      displayCart={displayCart}
      handleDisplayCart={handleDisplayCart}
    />
  );
};

CartStore.propTypes = {
  displayCart: PropTypes.bool,
  handleDisplayCart: PropTypes.func,
};
