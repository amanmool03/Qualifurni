
import Banner from './components/Banner';
import Features from './components/Features';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import './css/styles.scss';
import gsap from 'gsap'
import { useEffect } from 'react';

function App() {

  return (
    <div className="app">
      <Header />
      <Banner />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
