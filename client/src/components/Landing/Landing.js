//First component APP
import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import Button from "@material-ui/core/Button";

const Landing = () => {
  return (
    <>
      <div className='containerBase'>
        <div className='base'>
          <h1>Welcome to Pokémon Finder</h1>
          <Button
            variant='contained'
            size = 'medium'
            color='primary'
            component={Link}
            to='/home'
            >Go!
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
