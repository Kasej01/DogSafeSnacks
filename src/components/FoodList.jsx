import React from 'react';
import FoodItem from './FoodItem';
import useMediaQuery from '@mui/material/useMediaQuery';

const FoodList = ({ foods }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <div className="food-list" style={{ padding: isSmallScreen ? '10px' : '20px' }}>
            {foods.map((food, index) => (
                <FoodItem key={index} food={food} />
            ))}
        </div>
    );
};

export default FoodList;
