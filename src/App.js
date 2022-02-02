import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';

const App = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      name: 'mango',
      quantity: 0,
      price: 29,
    },
    {
      name: 'banana',
      quantity: 0,
      price: 29,
    },
    {
      name: 'pineapple',
      quantity: 0,
      price: 29,
    },
    {
      name: 'pitahaya',
      quantity: 0,
      price: 29,
    },
    {
      name: 'variety',
      quantity: 0,
      price: 29,
    },
  ]);
  // ENREGISTRER LE CART DANS LOCALSTORAGE

  const addProductToCart = (product) => {
    setCartItems((prevState) => {
      return prevState.map((item) => {
        return item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    });
    setDisplayCart(true);
  };

  const handleDisplayCart = () => {
    setDisplayCart((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar handleDisplayCart={handleDisplayCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={<ProductDetail addProductToCart={addProductToCart} />}
          />
        </Routes>
        <Cart displayCart={displayCart} cartItems={cartItems} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
