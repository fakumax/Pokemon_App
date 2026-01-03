import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';

async function setup() {
  console.log('🔧 Setting up database...');
  console.log('📍 Database URL:', process.env.DATABASE_URL ? 'Turso (remote)' : 'Local file');
  
  try {
    // Crear tabla Type
    console.log('Creating Type table...');
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "Type" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL UNIQUE
      );
    `);
    console.log('✅ Type table ready');
    
    // Crear tabla Pokemon
    console.log('Creating Pokemon table...');
    await prisma.$executeRawUnsafe(`
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
        "updatedAt" DATETIME NOT NULL
      );
    `);
    console.log('✅ Pokemon table ready');
    
    // Crear tabla PokemonType
    console.log('Creating PokemonType table...');
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "PokemonType" (
        "pokemonId" TEXT NOT NULL,
        "typeId" INTEGER NOT NULL,
        PRIMARY KEY ("pokemonId", "typeId"),
        FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE CASCADE,
        FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE
      );
    `);
    console.log('✅ PokemonType table ready');
    
    // Verificar tablas creadas
    const tables = await prisma.$queryRawUnsafe(`SELECT name FROM sqlite_master WHERE type='table'`);
    console.log('📋 Tables in database:', tables);
    
    console.log('✅ Database setup completed!');
  } catch (error) {
    console.error('❌ Setup Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

setup();
