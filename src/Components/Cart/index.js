import React from 'react';
import { getThumbnailProductByKey } from '../../Helpers/getProductImages';
import { Wrapper, Content, Item } from './cart.style';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import { VscClose } from 'react-icons/vsc';

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
    .map(({ quantity, price }) => quantity > 0 && price * quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper displayCart={displayCart}>
      <Content>
        <CartHeader handleDisplayCart={handleDisplayCart} />

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
