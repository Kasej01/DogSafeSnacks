import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Donate = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Container maxWidth="md" className="center-align">
            <Box sx={{ my: 4, px: isSmallScreen ? 2 : 0 }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h1" gutterBottom>
                    Donate
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Your donations help us keep this service free and continuously improve this app and the information on it.
                </Typography>
                <button className="button" onClick={() => window.open('https://buymeacoffee.com/kasejohnson01', '_blank')}>
                    Buy me a coffee
                </button>
            </Box>
        </Container>
    );
};

export default Donate;
