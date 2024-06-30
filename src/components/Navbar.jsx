import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="navbar">
                <Toolbar className="navbar">
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Avatar 
                            alt="Logo" 
                            src="/logo.png" // Use absolute path from the public directory
                            sx={{ width: 30, height: 30, marginRight: 2 }}
                        />
                        <Typography fontWeight="560" variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            DogEats
                        </Typography>
                    </Box>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        Mission
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
