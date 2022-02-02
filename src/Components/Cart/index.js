import React from 'react';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';
import { Wrapper, Content, Item } from './cart.style';
import CartItem from '../CartItem';

const Cart = ({
  cartItems,
  displayCart,
  handleDisplayCart,
  deleteProductFromCart,
  incrementeProductQuantity,
  decrementeProductQuantity,
}) => {
  const cardItemsList = cartItems.map((item) => {
    const { quantity, name, price } = item;

    return (
      <Item quantity={quantity}>
        {!!quantity && (
          <CartItem
            thumbnail={getThumbnailProductByKey(name)}
            name={name}
            price={price}
            quantity={quantity}
            deleteProductFromCart={() => deleteProductFromCart(item)}
            decrementeProductQuantity={() => decrementeProductQuantity(item)}
            incrementeProductQuantity={() => incrementeProductQuantity(item)}
          />
        )}
      </Item>
    );
  });

  const sum = cartItems
    .map((item) => item.quantity > 0 && item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <div className='header-cart'>
          <div>
            <h4>Your Cart</h4>
            {/* METTRE UNE ICON DELETE A LA PLACE DE X  */}
            <span onClick={handleDisplayCart}>x</span>
          </div>
        </div>
        <div className='content-cart'>
          <div className='container'>
            {sum > 0 ? (
              <div>
                <div className='list-items'>
                  <ul>{cardItemsList}</ul>
                </div>
                <div className='checkout'>
                  <p className='total'>
                    <span>Subtotal</span>
                    <span className='price'> $ {sum}.00 USD</span>
                  </p>
                  <button>checkout</button>
                </div>
              </div>
            ) : (
              <p className='empty-product'>sorry, there's nothing here yet.</p>
            )}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Cart;
