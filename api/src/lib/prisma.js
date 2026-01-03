import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.DATABASE_AUTH_TOKEN;

console.log('🔌 Connecting to database:', databaseUrl.startsWith('libsql://') ? 'Turso (remote)' : 'Local SQLite');

// Create adapter
const adapter = new PrismaLibSql({
  url: databaseUrl,
  authToken: authToken,
});

// Create Prisma client
export const prisma = new PrismaClient({ adapter });
