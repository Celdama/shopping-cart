import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Hero from './Components/Hero';
import Informations from './Components/Informations';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Hero />
      <Informations />
      <br />
      <br />
      <br />
      <GlobalStyle />
    </div>
  );
};

export default App;
