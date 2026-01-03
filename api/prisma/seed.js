import 'dotenv/config';
import { createClient } from '@libsql/client';
import axios from 'axios';

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.DATABASE_AUTH_TOKEN;

console.log('🌱 Starting seed...');
console.log('📍 Database URL:', databaseUrl.startsWith('libsql://') ? 'Turso (remote)' : 'Local SQLite');

const client = createClient({
  url: databaseUrl,
  authToken: authToken,
});

const POKEAPI_URL = 'https://pokeapi.co/api/v2';

async function main() {
  // Solo crear los tipos de Pokemon (no los pokémons)
  console.log('Creating Pokemon types...');
  const typesResponse = await axios.get(`${POKEAPI_URL}/type`);
  const typesData = typesResponse.data.results;

  for (const typeData of typesData.slice(0, 18)) { // Solo los 18 tipos principales
    const typeDetail = await axios.get(typeData.url);
    const typeName = typeDetail.data.name;
    
    // Insertar o ignorar si ya existe
    await client.execute({
      sql: `INSERT OR IGNORE INTO "Type" ("name") VALUES (?)`,
      args: [typeName]
    });
    console.log(`✓ Type: ${typeName}`);
  }

  // Verificar tipos insertados
  const result = await client.execute(`SELECT COUNT(*) as count FROM "Type"`);
  console.log(`\n✅ Seed completed! ${result.rows[0].count} types in database.`);
  console.log('ℹ️  Pokemons from the API will be cached, not saved to DB.');
  console.log('ℹ️  Only user-created pokemons will be saved to the database.');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(() => {
    client.close();
  });
