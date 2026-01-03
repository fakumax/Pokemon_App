import { prisma } from '../src/lib/prisma.js';

async function setup() {
  console.log('🔧 Setting up database...');
  
  try {
    // Intentar crear las tablas ejecutando SQL directo
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS Type (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      );
    `);
    
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS Pokemon (
        id TEXT NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        life INTEGER,
        strength INTEGER,
        defense INTEGER,
        speed INTEGER,
        height REAL,
        weight REAL,
        img TEXT,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL
      );
    `);
    
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS PokemonType (
        pokemonId TEXT NOT NULL,
        typeId INTEGER NOT NULL,
        PRIMARY KEY (pokemonId, typeId),
        FOREIGN KEY (pokemonId) REFERENCES Pokemon(id) ON DELETE CASCADE,
        FOREIGN KEY (typeId) REFERENCES Type(id) ON DELETE CASCADE
      );
    `);
    
    console.log('✅ Database tables created!');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('✅ Tables already exist!');
    } else {
      console.error('❌ Error:', error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

setup();
