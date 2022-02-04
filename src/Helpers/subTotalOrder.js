const getSubTotal = (cart) => {
  return cart
    .map(({ quantity, price }) => quantity > 0 && price * quantity)
    .reduce((prev, curr) => prev + curr, 0);
};

export default getSubTotal;
