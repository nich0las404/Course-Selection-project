import React from 'react';
import './App.css';
import HeroPage from './Homepage-ui/hero-page';
import Navbar from './Homepage-ui/navbar';
import AboutPage from './Homepage-ui/About';
import FooterPage from './Homepage-ui/footerPage';
import { BrowserRouter, Router, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <AboutPage />
      <FooterPage/>
    </div>
  );
}

export default App;
