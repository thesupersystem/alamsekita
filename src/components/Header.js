import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'CustomFont1' }}>Home</Button>
                <Button color="inherit" component={Link} to="/case-studies" sx={{ fontFamily: 'CustomFont1' }}>Case Studies</Button>
                <Button color="inherit" component={Link} to="/exhibition" sx={{ fontFamily: 'CustomFont1' }}>Exhibition</Button>
                <Button color="inherit" component={Link} to="/toolkit" sx={{ fontFamily: 'CustomFont1' }}>Toolkit</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
