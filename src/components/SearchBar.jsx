import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

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
        />
    );
};

export default SearchBar;
