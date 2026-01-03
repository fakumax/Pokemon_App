import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import { SEARCH_POKEMON } from '../../constants';
import './Home.scss';

const Home = () => {
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (searchTerm) => {
        if (!searchTerm || searchTerm.trim() === '') {
            setSearchResults(null);
            return;
        }

        try {
            const { data } = await axios.get(`${SEARCH_POKEMON}${searchTerm}`);
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching pokemon:', error);
            setSearchResults([]);
        }
    };

    return (
        <Box className='home' sx={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s ease' }}>
            <Header onSearch={handleSearch} />
            <Body searchResults={searchResults} />
            <Footer />
        </Box>
    );
};

export default Home;