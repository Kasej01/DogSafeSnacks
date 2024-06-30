import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Donate = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Donate
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Your donations help us keep this service free and continuously improve the database of foods.
                </Typography>
                <button className="button" onClick={() => window.open('https://www.paypal.com/donate', '_blank')}>
                    Donate via PayPal
                </button>
            </Box>
        </Container>
    );
};

export default Donate;
