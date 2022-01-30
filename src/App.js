import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
