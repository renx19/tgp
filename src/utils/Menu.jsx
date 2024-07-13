import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/menu.css';

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const subMenuOpen = Boolean(subMenuAnchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubMenuClick = (event) => {
        setSubMenuAnchorEl(event.currentTarget);
    };

    const handleSubMenuClose = () => {
        setSubMenuAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: '#ffcc00'}} // Change text color of dashboard button
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
                
                {/* Submenu for Members */}
                <MenuItem onClick={handleSubMenuClick}>
                    <span style={{ color: 'green' }}>Members</span>
                </MenuItem>
                <Menu
                    id="sub-menu"
                    anchorEl={subMenuAnchorEl}
                    open={subMenuOpen}
                    onClose={handleSubMenuClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleSubMenuClose}><Link to="/list" style={{ color: 'green' }}>List</Link></MenuItem>
                    <MenuItem onClick={handleSubMenuClose}><Link to="/qr" style={{ color: 'green' }}>QR CODE</Link></MenuItem>
                </Menu>
            </Menu>
        </div>
    );
}

export default BasicMenu;
