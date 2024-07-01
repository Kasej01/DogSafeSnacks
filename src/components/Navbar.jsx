import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="navbar" color="primary">
                <Toolbar className="navbar">
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <Avatar 
                                alt="Logo" 
                                src="/logo.png"
                                sx={{ width: isSmallScreen ? 40 : 50, height: isSmallScreen ? 40 : 50, marginRight: 2, borderRadius: 0 }}
                            />
                            <Typography fontWeight="560" variant={isSmallScreen ? 'h6' : 'h5'} component="div">
                            DogSafeSnacks
                            </Typography>
                        </Link>
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
