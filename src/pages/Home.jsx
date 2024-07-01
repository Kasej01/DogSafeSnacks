import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FoodList from '../components/FoodList';
import { searchFood } from '../services/foodService';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleSearch = (query) => {
        const results = searchFood(query);
        setFoods(results);
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: isSmallScreen ? 2 : 0
                }}
            >
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h1" gutterBottom>
                    Check a food or ingredient's safety
                </Typography>
                <SearchBar onSearch={handleSearch} />
                <FoodList foods={foods} />
            </Box>
        </Container>
    );
};

export default Home;
