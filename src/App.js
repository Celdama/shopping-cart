import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import Menu from './Components/Menu';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';
import { ProductDetailStore } from './Components/ProductDetail';
import { CartStore } from './Components/Cart';
import { CheckoutStore } from './Components/Checkout';

export const App = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: nanoid(),
      name: 'mango',
      quantity: 0,
      price: 29,
      img: './Images/products/mango/mainImg.jpg',
    },
    {
      id: nanoid(),
      name: 'banana',
      quantity: 0,
      price: 29,
      img: './Images/products/banana/mainImg.jpg',
    },
    {
      id: nanoid(),
      name: 'pineapple',
      quantity: 0,
      price: 29,
      img: './Images/products/pineapple/mainImg.jpg',
    },
    {
      id: nanoid(),
      name: 'pitahaya',
      quantity: 0,
      price: 29,
      img: './Images/products/pitahaya/mainImg.jpg',
    },
    {
      id: nanoid(),
      name: 'variety',
      quantity: 0,
      price: 29,
      img: './Images/products/variety/mainImg.jpg',
    },
  ]);
  // ENREGISTRER LE CART DANS LOCALSTORAGE

  useEffect(() => {
    const handleNumberOfProduct = () => {
      let sum = 0;
      cartItems.forEach(({ quantity }) => {
        sum += quantity;
      });
      setNumberOfCartItems(sum);
    };

    handleNumberOfProduct(cartItems);
  }, [cartItems]);

  const handleDisplayCart = () => {
    setDisplayCart((prevState) => !prevState);
  };

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Menu displayMenu={displayMenu} handleDisplayMenu={handleDisplayMenu} />
        <NavBar
          numberOfCartItems={numberOfCartItems}
          handleDisplayCart={handleDisplayCart}
          handleDisplayMenu={handleDisplayMenu}
        />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ProductDetailStore />} />
          <Route path='/checkout' element={<CheckoutStore />} />
        </Routes>
        <CartStore
          displayCart={displayCart}
          handleDisplayCart={handleDisplayCart}
        />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};
