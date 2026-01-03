import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import './Home.scss';

const Home = () => {
    return (
        <Box className='home' sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Header />
            <Box sx={{ pt: '90px' }}> {/* Padding top para el AppBar fijo */}
                <Body />
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;