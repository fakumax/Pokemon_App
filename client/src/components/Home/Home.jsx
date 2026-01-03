import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import './Home.scss';

const Home = () => {
    return (
        <Box className='home' sx={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s ease' }}>
            <Header />
            <Body />
            <Footer />
        </Box>
    );
};

export default Home;