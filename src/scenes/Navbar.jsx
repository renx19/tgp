
import '../styles/navbar.css';
import logo_light from '../assets/light.jpg';
import logo_dark from '../assets/dark.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import BasicMenu from '../utils/Menu';

const Navbar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    // Get the current location
    const location = useLocation();

    const isMobile = useMediaQuery('(max-width: 820px)');

    return (
        <div className='navbar'>
            <img src={theme === 'light' ? logo_light : logo_dark} alt='' className='logo' />

          

            {/* Conditionally render BasicMenu for smaller devices */}
            {isMobile ? (
                <BasicMenu />
            ) : (
                <ul>
                    {/* Add active class based on current route */}
                    <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
                </ul>
            )}

           


            <div className='toggle-icon'>
                {theme === 'light' ? (
                    <LightModeIcon className='theme-icon' style={{ fontSize: '40px' }} onClick={toggleMode} />
                ) : (
                    <DarkModeIcon className={`theme-icon dark-mode-icon`} style={{ fontSize: '40px' }} onClick={toggleMode} />
                )}
            </div>
        </div>
    

    );
}

Navbar.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    setTheme: PropTypes.func.isRequired
}

export default Navbar;
