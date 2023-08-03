import { Router } from 'express';
//const { Pokemon } = require('../db');
import { getAllPokeAPI, getPokemonId, postPokemon } from '../controllers/pokemon';
const router = Router();

router.get('/', getAllPokeAPI);
router.get('/:id', getPokemonId);
router.post('/', postPokemon);

export default router;
