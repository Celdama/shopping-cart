import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Hero />
      <br />
      <br />
      <br />
      <GlobalStyle />
    </div>
  );
};

export default App;
