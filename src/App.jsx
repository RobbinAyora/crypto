import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Coin from './pages/Coin/Coin.jsx';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
  
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
