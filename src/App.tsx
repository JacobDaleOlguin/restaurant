import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'; // Cannot find module 'react-router-dom'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?ts(2792)
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles.css';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
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