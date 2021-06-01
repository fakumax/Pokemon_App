const { Router } = require('express');
//const { Pokemon } = require('../db');
const {
  getAllPokeAPI,
  getPokemonId,
  postPokemon,
} = require('../controllers/pokemon');
const router = Router();

router.get('/', getAllPokeAPI);
router.get('/:id', getPokemonId);
router.post('/', postPokemon);

module.exports = router;
