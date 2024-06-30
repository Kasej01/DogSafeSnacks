import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4A90E2',
        },
        navbar: {
            main: '#4A90E2',  // Custom color for the navbar
        },
        footer: {
            main: '#4A90E2',  // Custom color for the footer
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/donate" element={<Donate />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
