import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';

const App = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      name: 'mango',
      quantity: 0,
      price: 29,
      img: './Images/products/mango/mainImg.jpg',
    },
    {
      name: 'banana',
      quantity: 0,
      price: 29,
      img: './Images/products/banana/mainImg.jpg',
    },
    {
      name: 'pineapple',
      quantity: 0,
      price: 29,
      img: './Images/products/pineapple/mainImg.jpg',
    },
    {
      name: 'pitahaya',
      quantity: 0,
      price: 29,
      img: './Images/products/pitahaya/mainImg.jpg',
    },
    {
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
      cartItems.forEach((item) => {
        sum += item.quantity;
      });
      setNumberOfCartItems(sum);
    };

    handleNumberOfProduct(cartItems);
  }, [cartItems]);

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

  const deleteProductFromCart = (product) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.name !== product.name)
    );
  };

  const handleDisplayCart = () => {
    setDisplayCart((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar
          numberOfCartItems={numberOfCartItems}
          handleDisplayCart={handleDisplayCart}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={<ProductDetail addProductToCart={addProductToCart} />}
          />
        </Routes>
        <Cart
          displayCart={displayCart}
          handleDisplayCart={handleDisplayCart}
          deleteProductFromCart={deleteProductFromCart}
          cartItems={cartItems}
        />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
