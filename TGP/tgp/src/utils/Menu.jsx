import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/menu.css';

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: 'green' }} // Change text color of dashboard button
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* Use Link for menu items */}
                <MenuItem onClick={handleClose}><Link to="/home" style={{ color: 'green' }}>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/about" style={{ color: 'green' }}>About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/contact" style={{ color: 'green' }}>Contact</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/events" style={{ color: 'green' }}>Events</Link></MenuItem>
            </Menu>
        </div>
    );
}

export default BasicMenu;
