import React  from 'react';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../assets/img/pokemon.png';

import { Link } from 'react-router-dom';
import './Header.scss';

//----------Icons----------
import { VscAdd} from 'react-icons/vsc';
//-------------------------
const Header = () => {
  
  return (
    <header className='container'>
      <div>
        <Link to='/'>
          <img src={Logo} alt='pokemon icon' />
        </Link>
        <p>Pokémon Finder</p>
      </div>
      <SearchBar />
      <div className='header_links'>
        <Link to='/create'>
          <VscAdd className='icon-add' />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
