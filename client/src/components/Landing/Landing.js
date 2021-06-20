//First component APP
import React from 'react';
//import { Link } from 'react-router-dom';
import './Landing.scss';
import { Link } from '@material-ui/core';

const Landing = () => {
  return (
    <>
      <div className='containerBase'>
        <div className='base'>
          <h1>Welcome to Pokémon Finder</h1>
          <Link
            component='button'
            To='localhost/home'
           
          > Go!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
