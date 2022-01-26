import { GlobalStyle } from './GlobalStyle';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import HeroImg from './Components/HeroImg';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <HeroImg />
      <br />
      <br />
      <br />
      <GlobalStyle />
    </div>
  );
};

export default App;
