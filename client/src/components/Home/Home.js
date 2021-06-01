import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import './Home.scss';


const Home = () => {
    return (
        <div className = 'home'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default Home;