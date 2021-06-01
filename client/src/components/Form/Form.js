import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon } from '../../actions/index';

import './Form.scss';
import Back from '../Back/Back';

//------VALIDATE FUNCTION -----

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required';
  } else if (!/^[ a-zA-Z0-9_-]{3,10}$/.test(input.name)) {
    errors.name = 'Name is invalid';
  }
  if (!input.life) {
    errors.life = 'Life is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.life)) {
    errors.life = 'Life is invalid';
  }
  if (!input.strength) {
    errors.strength = 'Strength is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.strength)) {
    errors.strength = 'Strength is invalid';
  }
  if (!input.defense) {
    errors.defense = 'Defense is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.defense)) {
    errors.defense = 'Defense is invalid';
  }
  if (!input.speed) {
    errors.speed = 'Speed is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.speed)) {
    errors.speed = 'Speed is invalid';
  }
  if (!input.height) {
    errors.height = 'Height is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.height)) {
    errors.height = 'Height is invalid';
  }

  if (!input.weight) {
    errors.weight = 'Weight is required';
  } else if (!/^[ 1-9_]{1,4}$/.test(input.weight)) {
    errors.weight = 'Weight is invalid';
  }

  return errors;
}

//----------- FORM -------------
const Form = () => {
  const { pokemon_types } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [listTypes, setlistTypes] = useState([]);
  const [input, setInput] = useState({
    name: '',
    life: '',
    strength: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (pokemon) => {
    setlistTypes([...listTypes, { id: pokemon }]);
    setInput({
      ...input,
      types: [...listTypes],
    });
  };

  const createPokemon = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));
  };

  //---ADD ANOTHER---
  const handleAddOther = (e) => {
    e.preventDefault();
    setInput({
      name: '',
      life: '',
      strength: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
    });
  };
  return (
    <>
      <Back className='link-back' />
      <div className='container-form'>
        <div className='wrapper'>
          <div className='contacts'>
            <h2>Create your Pokemon</h2>
          </div>

          <div className='login-box'>
            {/* <h2>Create Pokémon</h2> */}
            <form onSubmit={createPokemon}>
              <div className='user-box'>
                <label className='label-form'>Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  required
                  value={input.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className='danger'>{errors.name}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Life</label>
                <input
                  id='life'
                  name='life'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.life}
                  onChange={handleInputChange}
                />
                {errors.life && <p className='danger'>{errors.life}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Strength</label>
                <input
                  id='strength'
                  name='strength'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.strength}
                  onChange={handleInputChange}
                />
                {errors.strength && <p className='danger'>{errors.strength}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Defense</label>
                <input
                  id='defense'
                  name='defense'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.defense}
                  onChange={handleInputChange}
                />
                {errors.defense && <p className='danger'>{errors.defense}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Speed</label>
                <input
                  id='speed'
                  name='speed'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.speed}
                  onChange={handleInputChange}
                />
                {errors.speed && <p className='danger'>{errors.speed}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Height</label>
                <input
                  id='height'
                  name='height'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.height}
                  onChange={handleInputChange}
                />
                {errors.height && <p className='danger'>{errors.height}</p>}
              </div>
              <div className='user-box'>
                <label className='label-form'>Weight</label>
                <input
                  id='weight'
                  name='weight'
                  type='text'
                  autoComplete='off'
                  className='form-control-material'
                  value={input.weight}
                  onChange={handleInputChange}
                />
                {errors.weight && <p className='danger'>{errors.weight}</p>}
              </div>
              <div className='user-box'>
                <label className='select-label-form'>Types</label>
                <select
                  name='types'
                  className='select-form'
                  onChange={(e) => handleSelect(e.target.value)}
                  multiple
                >
                  {pokemon_types?.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div></div>

              <button type='submit' className='full-width'>
                Create
              </button>
              <button
                type='submit'
                className='full-width'
                onClick={handleAddOther}
              >
                Add Other
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
