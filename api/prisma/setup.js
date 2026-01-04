import 'dotenv/config';
import { createClient } from '@libsql/client';

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.DATABASE_AUTH_TOKEN;

console.log('🔧 Setting up database...');
console.log('📍 Database URL:', databaseUrl.startsWith('libsql://') ? `Turso: ${databaseUrl}` : 'Local SQLite');

const client = createClient({
  url: databaseUrl,
  authToken: authToken,
});

async function setup() {
  try {
    // Borrar tablas existentes para recrearlas correctamente
    console.log('Dropping existing tables...');
    await client.execute(`DROP TABLE IF EXISTS "PokemonType"`);
    await client.execute(`DROP TABLE IF EXISTS "Pokemon"`);
    await client.execute(`DROP TABLE IF EXISTS "Type"`);
    
    // Crear tabla Type
    console.log('Creating Type table...');
    await client.execute(`
      CREATE TABLE IF NOT EXISTS "Type" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL UNIQUE
      )
    `);
    console.log('✅ Type table ready');

    // Crear tabla Pokemon con id TEXT (UUID)
    console.log('Creating Pokemon table...');
    await client.execute(`
      CREATE TABLE IF NOT EXISTS "Pokemon" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "life" INTEGER,
        "strength" INTEGER,
        "defense" INTEGER,
        "speed" INTEGER,
        "height" REAL,
        "weight" REAL,
        "img" TEXT,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Pokemon table ready');

    // Crear tabla PokemonType con pokemonId TEXT
    console.log('Creating PokemonType table...');
    await client.execute(`
      CREATE TABLE IF NOT EXISTS "PokemonType" (
        "pokemonId" TEXT NOT NULL,
        "typeId" INTEGER NOT NULL,
        PRIMARY KEY ("pokemonId", "typeId"),
        FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE CASCADE,
        FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE
      )
    `);
    console.log('✅ PokemonType table ready');

    // Verificar tablas creadas
    const result = await client.execute(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'`);
    console.log('📋 Tables in database:', result.rows.map(r => r.name));

    console.log('✅ Database setup completed!');
  } catch (error) {
    console.error('❌ Setup Error:', error);
    process.exit(1);
  } finally {
    client.close();
  }
}

setup();
