import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} 
from 'react-router-dom'; 
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles.css';
import Layout from './components/Layout';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;