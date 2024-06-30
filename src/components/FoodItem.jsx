import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const FoodItem = ({ food }) => {
    return (
        <Card className="food-item">
            <CardContent>
                <Typography variant="h6" component="div">
                    {food.name}
                </Typography>
                <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    {food.isSafe ? (
                        <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                    ) : (
                        <CancelIcon color="error" sx={{ mr: 1 }} />
                    )}
                    {food.isSafe ? 'Safe for dogs' : 'Not safe for dogs'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FoodItem;
