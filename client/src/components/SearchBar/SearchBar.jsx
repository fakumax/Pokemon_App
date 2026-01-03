import React, {useState} from 'react';
import './SearchBar.scss';
//----------Icons----------
import { VscSearch } from 'react-icons/vsc';
//-------------------------
const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const submitPokemon = async (e) => {
    e.preventDefault();
    onSearch(name.trim());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!value.trim()) {
      onSearch('');
    }
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
        onChange={handleInputChange}
      />
      <button type='submit'><VscSearch className = 'icon-search' /></button>
    </form>
  );
};

export default SearchBar;
