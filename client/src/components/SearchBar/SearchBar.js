import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../actions/index';
import './SearchBar.scss';
//----------Icons----------
import { VscSearch } from 'react-icons/vsc';
//-------------------------
const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const submitPokemon = (e) => {
    e.preventDefault();
    dispatch(getPokemon(name));
  };

  return (
    <form onSubmit={submitPokemon} className='formStyle'>
      <input
        id='name'
        name='name'
        type='text'
        autoComplete='off'
        placeholder='Pokemons'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'><VscSearch className = 'icon-search' /></button>
    </form>
  );
};

export default SearchBar;
