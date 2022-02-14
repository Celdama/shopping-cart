import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import Menu from './Components/Menu';
import { NavBarStore } from './Components/Navbar';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';
import { ProductDetailStore } from './Components/ProductDetail';
import { CartStore } from './Components/Cart';
import { CheckoutStore } from './Components/Checkout';

export const App = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);

  // ENREGISTRER LE CART DANS LOCALSTORAGE

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
        <NavBarStore
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
