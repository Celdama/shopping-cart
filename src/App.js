import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
