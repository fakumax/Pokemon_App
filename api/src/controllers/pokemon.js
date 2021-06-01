const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { POKEMON_URL } = require('../constants');
const { Sequelize } = require('sequelize');
var validator = require('validator');

/* Closure Function offset  */
// const offset = () => {
//   var initialValue = 0;
//   const countOffset = (count) => {
//     initialValue += count;
//     console.log(initialValue);
//   };
//   return countOffset;
// };
// var next = offset();




var count = 0;
var offsetDb = 0;

/* Async Function Get ALL POKEMON  */
async function getAllPokeAPI(req, res, next) {
  const { name } = req.query;
  if (name) {
    //----------------------------------------
    try {
      const { data } = await axios.get(`${POKEMON_URL}/${name}`);
      const values = {
        id: data.id,
        name: data.name,
        types: data.types.map((v) => {return{name: v.type.name}}),
        img: data.sprites.other['official-artwork'].front_default,
      };
      const dbData = await Pokemon.findAll({ where: { name: name } });
      const response = dbData.concat(values);
      return res.json(response);
      //----------------------------------------
    } catch (err) {
      const dbData = await Pokemon.findAll({ where: { name: name } });
      return dbData
        ? res.json(dbData)
        : res.status(404).json({ message: 'the pokemon has not been found.' });
    }
    //----------------------------------------
  } else {
    // Si query name está vacío entonces busca todos los resultados.
    try {
      //-----------BD CONSULTA------------------
      const dbData = await Pokemon.findAll({
        attributes: ['id', 'name'],
        limit: 40,
        offset: 0,
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      });
      //offsetDb += dbData.length;
      //----------------------------------------
      const url = await axios.get(`${POKEMON_URL}/?offset=${count}&limit=40`);
      //count += 40;
      const filterURL = await url.data.results.map((value) =>
        axios.get(`${value.url}`)
      );

    
      const allData = await Promise.all(filterURL).then((results) => {
      
        const resp = results.map((value) => ({
          id: value.data.id,
          name: value.data.name,
          strength: value.data.stats[1].base_stat,
          types: value.data.types.map((v) => {return{name: v.type.name}}),
          img: value.data.sprites.other['official-artwork'].front_default ,
        }));
        return resp;
      });
      //----------------------------------------
      // const results = await User.findAll();
      //const records = dbData.map(result => result.dataValues.types.dataValues);
    
       console.log(filterURL.data);
      const response = dbData.concat(allData);
      //----------------------------------------
      return res.json(response);
    } catch (err) {
      next(err);
    }
  }
}

/* Async Function Get POKEMON ID */
async function getPokemonId(req, res, next) {
  const { id } = req.params;
  try {
    if (validator.isUUID(id)) {
      const dbData = await Pokemon.findByPk(id, {
        attributes: ['id', 'name','life','strength','defense','speed','height','weight'],
        include: {
          model: Type,
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      });
      return dbData
        ? res.json(dbData)
        : res.status(404).json({ message: 'the pokemon has not been found.' });
    } else {
      const { data } = await axios.get(`${POKEMON_URL}/${id}`);
      const values = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        life: data.stats[0].base_stat,
        strength: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        types: data.types.map((v) => {return{name: v.type.name}}),
        img: data.sprites.other['official-artwork'].front_default,
      };
      return res.json(values);
    }
  } catch (err) {
    return res.status(404).json({ message: 'the pokemon has not been found.' });
  }
}

/* Async Function Post POKEMON  */
async function postPokemon(req, res, next) {
  //const pokemon_body =req.body;
  const { name, life, strength, defense, speed, height, weight,types } = req.body;
  try {
    // const pokemons = await Pokemon.create({
    //   ...pokemon_body,
    // });
    const pokemons = await Pokemon.create({
      name: name,
      life: life,
      strength:strength,
      defense:defense,
      speed:speed,
      height:height,
      weight:weight
    });
    const typess = types.map((type) => type.id);
    pokemons.addTypes(typess);
    return res.json(pokemons);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getAllPokeAPI,
  getPokemonId,
  postPokemon,
};
