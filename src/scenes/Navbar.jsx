import React, { useState } from 'react';
import '../styles/navbar.css';
import logo_light from '../assets/light.jpg';
import logo_dark from '../assets/dark.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom'; // Updated import
import BasicMenu from '../utils/Menu';


const Navbar = ({ theme, setTheme }) => {
 



    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };



    const isMobile = useMediaQuery('(max-width: 820px)');

    return (
        <div className={`navbar-container ${theme}`}>
            <div className='navbar-con'>
                <img src={theme === 'light' ? logo_light : logo_dark} alt='' className='logo' />

                {isMobile ? (
                    <BasicMenu />
                ) : (
                    <ul className='nav-list '>
                        <li className='nav-item '>
                            <NavLink to="/home" >Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="dropdown-title">Members</span>
                            <ul className="dropdown-content">
                                <li> <NavLink to="/members">List</NavLink></li>
                                <li><NavLink to="/qr">QR Code</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                )}

                <div className='toggle-icon'>
                    {theme === 'light' ? (
                        <LightModeIcon className='theme-icon' style={{ fontSize: '40px' }} onClick={toggleMode} />
                    ) : (
                        <DarkModeIcon className='theme-icon dark-mode-icon' style={{ fontSize: '40px' }} onClick={toggleMode} />
                    )}
                </div>

                

               
            </div>
        </div>
    );
};

Navbar.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    setTheme: PropTypes.func.isRequired
};

export default Navbar;
