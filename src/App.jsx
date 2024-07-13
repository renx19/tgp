import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Navbar from './scenes/Navbar';
import Events from './scenes/Events';
import FooterLinks from './components/FooterLinks';
import EL from './components/EL';
import Members from './scenes/Members';
import QR from './components/Qr';
import MemberDetails from './components/MemberDetails';
import ProtectedRoute from './middleware/authContext'; // Adjust the import path as needed
import Footer from './scenes/Footer';
import Privacy from './components/FooterUl/Privacy';
import FAQ from './components/FooterUl/FAQ';
import Developer from './components/FooterUl/Developer';

function App() {
  const currentTheme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);


  // const disableRightClick = (e) => {
  //   e.preventDefault();
  // };

  // document.addEventListener('contextmenu', disableRightClick);



  return (
    <div className={`body-container ${theme}`}>
      <HashRouter>
        <Navbar theme={theme} setTheme={setTheme} />

      
        <Routes>
          <Route path="/footer" element={<FooterLinks />} />
          <Route path="/footer/#privacy" element={<Privacy />} />
          <Route path="/footer/#faq" element={<FAQ />} />
        
          <Route path="/developer" element={<Developer />} />

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
  
          <Route path="/el" element={<EL />} />

          <Route
            path="/members"
            element={
              <ProtectedRoute
                element={Members}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/qr"
            element={
              <ProtectedRoute
                element={QR}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/member/:id"
            element={
              <ProtectedRoute
                element={MemberDetails}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
