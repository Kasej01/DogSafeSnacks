import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box className="footer" component="footer">
            <Typography variant={isSmallScreen ? 'h6' : 'h5'} align="center" gutterBottom>
                DogEats
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                Helping you keep your furry friends safe and healthy!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: isSmallScreen ? '5px' : '10px', mt: 2 }}>
                <Button variant="contained" color="primary" component={Link} to="/">
                    Home
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/donate">
                    Buy me a coffee
                </Button>
                <Button variant="contained" color="primary" onClick={() => window.location = 'mailto:kasejohnson01@gmail.com'}>
                    Contact Me
                </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                © {new Date().getFullYear()} Kase Johnson
            </Typography>
        </Box>
    );
};

export default Footer;
