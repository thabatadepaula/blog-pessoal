import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from '../src/paginas/home/Home'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
