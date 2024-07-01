import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4A90E2',
        },
        secondary: {
            main: '#E91E63',
        },
        background: {
            default: '#f5f5f5',
        },
        text: {
            primary: '#333',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
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
                        <Route path="/about" element={<About />} />
                        <Route path="/donate" element={<Donate />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
