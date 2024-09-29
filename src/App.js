import React from 'react';
import './App.css';
import HeroPage from './Homepage-ui/hero-page';
import Navbar from './Homepage-ui/navbar';
import AboutPage from './Homepage-ui/About';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <AboutPage />
    </div>
  );
}

export default App;
