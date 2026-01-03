import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField, Chip } from '@mui/material';
import { usePostPokemon, useGetAllTypes } from '../../hooks/usePokemon';
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
  const navigate = useNavigate();
  const { data: pokemon_types = [] } = useGetAllTypes();
  const { mutate: createPokemon } = usePostPokemon();
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
    img: '',
    types: [],
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

  const handleTypeChange = (event, newValue) => {
    const typeIds = newValue.map(type => type.id);
    setlistTypes(newValue);
    setInput({
      ...input,
      types: typeIds,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que tenga al menos un tipo
    if (!input.types || input.types.length === 0) {
      alert('Debes seleccionar al menos un tipo para el Pokémon');
      return;
    }
    
    // Convertir strings a números
    const pokemonData = {
      name: input.name.trim(),
      life: parseInt(input.life) || 0,
      strength: parseInt(input.strength) || 0,
      defense: parseInt(input.defense) || 0,
      speed: parseInt(input.speed) || 0,
      height: parseFloat(input.height) || 0,
      weight: parseFloat(input.weight) || 0,
      img: input.img.trim() || '',
      types: input.types,
    };
    
    console.log('Datos a enviar:', pokemonData);
    
    createPokemon(pokemonData, {
      onSuccess: () => {
        alert('¡Pokémon creado exitosamente!');
        navigate('/home');
      },
      onError: (error) => {
        console.error('Error creating pokemon:', error);
        console.error('Response data:', error.response?.data);
        alert('Error al crear el Pokémon. Verifica los datos.');
      },
    });
  };
  return (
    <>
      <Back className='link-back' />
      <div className='container-form'>
        <div className='form-wrapper'>
          <div className='login-box'>
            <h2 className='form-title'>Create Pokémon</h2>
            <form onSubmit={handleSubmit}>
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
              <div className='user-box user-box-full'>
                <label className='label-form'>Image URL</label>
                <input
                  id='img'
                  name='img'
                  type='url'
                  autoComplete='off'
                  placeholder='https://example.com/image.png'
                  className='form-control-material'
                  value={input.img}
                  onChange={handleInputChange}
                />
              </div>
              <div className='user-box'>
                <label className='select-label-form'>Types</label>
                <Autocomplete
                  multiple
                  id="pokemon-types"
                  options={pokemon_types}
                  getOptionLabel={(option) => option.name}
                  value={listTypes}
                  onChange={handleTypeChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Select types"
                      className="autocomplete-input"
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => {
                      const { key, ...tagProps } = getTagProps({ index });
                      return (
                        <Chip
                          key={key}
                          label={option.name}
                          {...tagProps}
                          sx={{
                            backgroundColor: '#DC0A2D',
                            color: 'white',
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            '& .MuiChip-deleteIcon': {
                              color: 'white',
                              '&:hover': {
                                color: '#ffcccb',
                              },
                            },
                          }}
                        />
                      );
                    })
                  }
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'var(--input-bg)',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'var(--border-color)',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#DC0A2D',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#DC0A2D',
                        boxShadow: '0 0 0 4px rgba(220, 10, 45, 0.1)',
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                    },
                  }}
                />
              </div>
              <button type='submit' className='btn-create'>
                Create Pokémon
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
