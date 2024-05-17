import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Navbar from './scenes/Navbar';
import Events from './scenes/Events';
import EventList from './components/EventList';
import FooterLinks from './components/FooterLinks';

function App() {

  const currentTheme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
      localStorage.setItem('current_theme', theme);
  }, [theme]);


    return (
      <div className={`container ${theme}`}>
       <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
       <Routes>
  
        <Route path="/home" element={<Home />} />
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Footer" element={<FooterLinks />} />
          <Route path="/events-list" element={<EventList />} />
    
    

       
       </Routes>
      
     </BrowserRouter>
     </div>
    )
  }
  
 export default App
  

