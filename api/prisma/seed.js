import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import axios from 'axios';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

const POKEAPI_URL = 'https://pokeapi.co/api/v2';

async function main() {
  console.log('🌱 Starting seed...');

  // Primero, crear los tipos de Pokemon
  console.log('Creating Pokemon types...');
  const typesResponse = await axios.get(`${POKEAPI_URL}/type`);
  const typesData = typesResponse.data.results;

  for (const typeData of typesData.slice(0, 18)) { // Solo los 18 tipos principales
    const typeDetail = await axios.get(typeData.url);
    await prisma.type.upsert({
      where: { name: typeDetail.data.name },
      update: {},
      create: {
        name: typeDetail.data.name,
      },
    });
    console.log(`✓ Type: ${typeDetail.data.name}`);
  }

  // Luego, crear los primeros 151 Pokemon
  console.log('\nCreating Pokemon...');
  for (let i = 1; i <= 151; i++) {
    try {
      const pokemonResponse = await axios.get(`${POKEAPI_URL}/pokemon/${i}`);
      const pokemon = pokemonResponse.data;

      // Crear el Pokemon
      const createdPokemon = await prisma.pokemon.create({
        data: {
          name: pokemon.name,
          life: pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat || 50,
          strength: pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat || 50,
          defense: pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat || 50,
          speed: pokemon.stats.find(s => s.stat.name === 'speed')?.base_stat || 50,
          height: pokemon.height / 10, // Convertir a metros
          weight: pokemon.weight / 10, // Convertir a kg
          img: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
        },
      });

      // Asociar tipos al Pokemon
      for (const typeInfo of pokemon.types) {
        const type = await prisma.type.findUnique({
          where: { name: typeInfo.type.name },
        });

        if (type) {
          await prisma.pokemonType.create({
            data: {
              pokemonId: createdPokemon.id,
              typeId: type.id,
            },
          });
        }
      }

      console.log(`✓ Pokemon #${i}: ${pokemon.name}`);
    } catch (error) {
      console.error(`✗ Error creating Pokemon #${i}:`, error.message);
    }
  }

  console.log('\n✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
