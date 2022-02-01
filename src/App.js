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
  const [cartItems, setCartItem] = useState([]);

  const addProductToCart = (product) => {
    setCartItem((prevState) => [...prevState, product]);
  };

  console.log(cartItems);

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={<ProductDetail addProductToCart={addProductToCart} />}
          />
        </Routes>
        <Cart />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
