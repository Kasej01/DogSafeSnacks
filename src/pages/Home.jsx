import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FoodList from '../components/FoodList';
import { searchFood } from '../services/foodService';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [foods, setFoods] = useState([]);

    const handleSearch = (query) => {
        const results = searchFood(query);
        setFoods(results);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dog Food Checker
                </Typography>
                <SearchBar onSearch={handleSearch} />
                <FoodList foods={foods} />
            </Box>
        </Container>
    );
};

export default Home;
