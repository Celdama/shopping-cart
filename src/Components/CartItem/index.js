import React from 'react';

const CartItem = ({
  cover,
  name,
  price,
  quantity,
  deleteProductFromCart,
  decrementeProductQuantity,
  incrementeProductQuantity,
}) => {
  return (
    <div className='item-container'>
      <div className='left'>
        <img src={cover} alt='' />
      </div>
      <div className='center'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}.00 USD</span>
        <span onClick={deleteProductFromCart} className='delete'>
          REMOVE
        </span>
      </div>
      <div className='right'>
        <span onClick={decrementeProductQuantity} className='decremente'>
          -
        </span>
        <span>{quantity}</span>
        <span onClick={incrementeProductQuantity} className='incremente'>
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
