import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
//----------Icons----------
import { FaGithub, FaLinkedin } from 'react-icons/fa';

//-------------------------
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <Link to='#'>
          <p>Design by Facundo Vergara ®</p>
        </Link>
      <div className='social-icon'>
        <FaGithub />
        <FaLinkedin />
      </div>
      </div>
    </>
  );
};

export default Footer;
