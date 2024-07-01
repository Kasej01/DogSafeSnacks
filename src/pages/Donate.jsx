import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.open('https://buymeacoffee.com/kasejohnson01', '_blank')}
                    sx={{ mt: 2 }}
                >
                    Buy me a coffee
                </Button>
            </Box>
        </Container>
    );
};

export default Donate;
