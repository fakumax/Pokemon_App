import { prisma } from './src/lib/prisma.js';

async function test() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to Turso!');
    
    // Probar query simple
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Query works:', result);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
