import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Preloader } from './components/Preloader.js';
import { Navbar } from './components/Navbar.js';
import { Banner } from './components/Banner.js';
import { Collapsibles } from './components/Collapsibles.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Banner />
      <Collapsibles />
      <Footer />
    </div>
  );
}

export default App;
