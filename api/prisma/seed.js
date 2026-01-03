import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';
import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';

async function main() {
  console.log('🌱 Starting seed...');

  // Solo crear los tipos de Pokemon (no los pokémons)
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

  console.log('\n✅ Seed completed! Types loaded.');
  console.log('ℹ️  Pokemons from the API will be cached, not saved to DB.');
  console.log('ℹ️  Only user-created pokemons will be saved to the database.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
