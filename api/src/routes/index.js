const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const typeRoute = require('./type');
const pokemonRoute = require('./pokemon');

router.use('/pokemons', pokemonRoute);
router.use('/types', typeRoute);

module.exports = router;