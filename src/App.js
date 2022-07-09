import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';

// pages
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  );
}

export default App;
