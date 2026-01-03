import React, {useState} from 'react';
import { searchPokemon } from '../../hooks/usePokemon';
import { usePokemonStore } from '../../store/usePokemonStore';
import './SearchBar.scss';
//----------Icons----------
import { VscSearch } from 'react-icons/vsc';
//-------------------------
const SearchBar = () => {
  const [name, setName] = useState('');
  const setPokemonOnly = usePokemonStore((state) => state.setPokemonOnly);

  const submitPokemon = async (e) => {
    e.preventDefault();
    try {
      const data = await searchPokemon(name);
      setPokemonOnly(data);
    } catch (error) {
      console.error('Error searching pokemon:', error);
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
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'><VscSearch className = 'icon-search' /></button>
    </form>
  );
};

export default SearchBar;
