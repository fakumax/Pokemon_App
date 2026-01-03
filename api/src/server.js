import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';
import pokemonRoutes from './routes/pokemon.js';
import typeRoutes from './routes/type.js';

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true
      }
    }
  }
});

// Register CORS
await fastify.register(cors, {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
});

// Register routes
await fastify.register(pokemonRoutes, { prefix: '/pokemons' });
await fastify.register(typeRoutes, { prefix: '/types' });

// Health check
fastify.get('/', async () => {
  return { status: 'ok', message: 'Pokemon API with Fastify + Prisma' };
});

// Error handler
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  reply.status(error.statusCode || 500).send({
    error: error.message || 'Internal Server Error',
  });
});

// Start server
const start = async () => {
  try {
    const port = process.env.PORT || 3001;
    const host = process.env.HOST || '0.0.0.0';
    
    await fastify.listen({ port, host });
    console.log(`🚀 Server running on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
