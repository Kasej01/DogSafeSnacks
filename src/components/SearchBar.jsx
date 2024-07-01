import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <TextField
            className="search-bar"
            label="Search for a food item..."
            variant="outlined"
            fullWidth
            value={query}
            onChange={handleChange}
            size={isSmallScreen ? 'small' : 'medium'}
        />
    );
};

export default SearchBar;
