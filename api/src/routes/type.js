import axios from 'axios';
import { prisma } from '../lib/prisma.js';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

export default async function typeRoutes(fastify) {
  // GET /types - Get all types from PokeAPI
  fastify.get('/', async (request, reply) => {
    try {
      const response = await axios.get(`${POKEAPI_BASE}/type`);
      const types = response.data.results
        .filter(type => !['unknown', 'shadow'].includes(type.name))
        .map((type, index) => ({
          id: index + 1,
          name: type.name
        }));
      
      return types;
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ error: error.message });
    }
  });

  // GET /types/:id - Get type by ID
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params;

    const type = await prisma.type.findUnique({
      where: { id: parseInt(id) },
      include: {
        pokemons: {
          include: {
            pokemon: true
          }
        }
      }
    });

    if (!type) {
      return reply.status(404).send({ error: 'Type not found' });
    }

    return {
      ...type,
      pokemons: type.pokemons.map(pt => pt.pokemon)
    };
  });

  // POST /types - Create new type
  fastify.post('/', async (request, reply) => {
    const { name } = request.body;

    if (!name) {
      return reply.status(400).send({ error: 'Name is required' });
    }

    try {
      const type = await prisma.type.create({
        data: { name }
      });
      return reply.status(201).send(type);
    } catch (error) {
      if (error.code === 'P2002') {
        return reply.status(409).send({ error: 'Type already exists' });
      }
      throw error;
    }
  });
}
