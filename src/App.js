import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { MenuStore } from './Components/Menu';
import { NavBarStore } from './Components/Navbar';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';
import { ProductDetailStore } from './Components/ProductDetail';
import { CartStore } from './Components/Cart';
import { CheckoutStore } from './Components/Checkout';

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <MenuStore />
        <NavBarStore />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ProductDetailStore />} />
          <Route path='/checkout' element={<CheckoutStore />} />
        </Routes>
        <CartStore />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};
