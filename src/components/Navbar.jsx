import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="navbar">
                <Toolbar className="navbar">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dog Food Checker
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/donate">
                        Donate
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
