import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='#'>
        <p>Design by Facundo Vergara ®</p>
      </Link>
    </div>
  );
};

export default Footer;
