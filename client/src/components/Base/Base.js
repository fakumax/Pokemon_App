//First component APP
import React from 'react';
import { Link } from 'react-router-dom';
import './Base.scss';

const Base = () => {
  return (
    <>
      <div className='containerBase'>
        <div className='base'>
          <h1>Welcome to Pokémon Finder</h1>
          <Link to='/home'>Go!</Link>
        </div>
      </div>
    </>
  );
};

export default Base;
