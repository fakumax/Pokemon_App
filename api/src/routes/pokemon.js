import axios from 'axios';
import { prisma } from '../lib/prisma.js';
import { pokemonSchema, pokemonUpdateSchema } from '../schemas/pokemon.js';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

// Cache en memoria
let pokemonCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hora

async function fetchPokemonsFromAPI() {
  console.log('🔄 Fetching pokemons from PokeAPI...');
  
  const response = await axios.get(`${POKEAPI_BASE}/pokemon?limit=151`);
  const pokemonList = response.data.results;
  
  // Obtener detalles en lotes para ser más rápido
  const pokemonDetails = await Promise.all(
    pokemonList.map(async (p) => {
      const details = await axios.get(p.url);
      const pokemon = details.data;
      
      return {
        id: pokemon.id.toString(),
        name: pokemon.name,
        life: pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat,
        strength: pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat,
        defense: pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat,
        speed: pokemon.stats.find(s => s.stat.name === 'speed')?.base_stat,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        img: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
        types: pokemon.types.map(t => ({ id: t.slot, name: t.type.name }))
      };
    })
  );
  
  console.log('✅ Pokemons cached successfully');
  return pokemonDetails;
}

export default async function pokemonRoutes(fastify) {
  // GET /pokemons - Get all pokemons (cached)
  fastify.get('/', async (request, reply) => {
    const { name } = request.query;
    
    try {
      // Verificar si el caché está vigente
      const now = Date.now();
      if (!pokemonCache || !cacheTimestamp || (now - cacheTimestamp) > CACHE_DURATION) {
        pokemonCache = await fetchPokemonsFromAPI();
        cacheTimestamp = now;
      }
      
      // Si hay búsqueda por nombre
      if (name) {
        const found = pokemonCache.filter(p => 
          p.name.toLowerCase().includes(name.toLowerCase())
        );
        return found;
      }
      
      return pokemonCache;
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: error.message });
    }
  });

  // GET /pokemons/:id - Get pokemon by ID
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params;

    const pokemon = await prisma.pokemon.findUnique({
      where: { id },
      include: {
        types: {
          include: {
            type: true
          }
        }
      },
    });

    if (!pokemon) {
      return reply.status(404).send({ error: 'Pokemon not found' });
    }

    return {
      ...pokemon,
      types: pokemon.types.map(pt => pt.type)
    };
  });

  // POST /pokemons - Create new pokemon
  fastify.post('/', async (request, reply) => {
    try {
      const data = pokemonSchema.parse(request.body);
      
      const pokemon = await prisma.pokemon.create({
        data: {
          name: data.name,
          life: data.life,
          strength: data.strength,
          defense: data.defense,
          speed: data.speed,
          height: data.height,
          weight: data.weight,
          img: data.img,
          types: {
            create: data.types.map(typeId => ({
              type: {
                connect: { id: typeId }
              }
            }))
          }
        },
        include: {
          types: {
            include: {
              type: true
            }
          }
        }
      });

      return reply.status(201).send({
        ...pokemon,
        types: pokemon.types.map(pt => pt.type)
      });
    } catch (error) {
      if (error.name === 'ZodError') {
        return reply.status(400).send({ error: error.errors });
      }
      throw error;
    }
  });

  // PUT /pokemons/:id - Update pokemon
  fastify.put('/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const data = pokemonUpdateSchema.parse(request.body);

      const existingPokemon = await prisma.pokemon.findUnique({ where: { id } });
      if (!existingPokemon) {
        return reply.status(404).send({ error: 'Pokemon not found' });
      }

      const updateData = {
        name: data.name,
        life: data.life,
        strength: data.strength,
        defense: data.defense,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
        img: data.img,
      };

      if (data.types) {
        await prisma.pokemonType.deleteMany({
          where: { pokemonId: id }
        });
        
        updateData.types = {
          create: data.types.map(typeId => ({
            type: {
              connect: { id: typeId }
            }
          }))
        };
      }

      const pokemon = await prisma.pokemon.update({
        where: { id },
        data: updateData,
        include: {
          types: {
            include: {
              type: true
            }
          }
        }
      });

      return {
        ...pokemon,
        types: pokemon.types.map(pt => pt.type)
      };
    } catch (error) {
      if (error.name === 'ZodError') {
        return reply.status(400).send({ error: error.errors });
      }
      throw error;
    }
  });

  // DELETE /pokemons/:id - Delete pokemon
  fastify.delete('/:id', async (request, reply) => {
    const { id } = request.params;

    const pokemon = await prisma.pokemon.findUnique({ where: { id } });
    if (!pokemon) {
      return reply.status(404).send({ error: 'Pokemon not found' });
    }

    await prisma.pokemon.delete({ where: { id } });

    return reply.status(204).send();
  });
}
