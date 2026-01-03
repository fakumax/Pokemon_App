# API - Pokemon Fastify + Prisma + Turso

API moderna con Fastify, Prisma y SQLite (Turso) para gestión de Pokémon.

## Stack Tecnológico

- **Framework:** Fastify v5
- **ORM:** Prisma v7
- **Base de Datos:** SQLite (Turso para producción)
- **Validación:** Zod
- **Runtime:** Node.js 22+

## Instalación

```bash
cd api
pnpm install
```

## Configuración

1. Copia `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Para desarrollo local, usa:
```env
DATABASE_URL=file:./dev.db
```

3. Para producción con Turso:
```env
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token
```

## Base de Datos

### Generar Prisma Client
```bash
pnpm prisma:generate
```

### Crear y aplicar migraciones
```bash
pnpm prisma:migrate
```

### Abrir Prisma Studio (GUI)
```bash
pnpm prisma:studio
```

## Desarrollo

```bash
pnpm dev
```

El servidor correrá en `http://localhost:3001`

## Producción

```bash
pnpm start
```

## Endpoints

### Pokémon
- `GET /pokemons` - Listar todos
- `GET /pokemons?name=pikachu` - Buscar por nombre
- `GET /pokemons?type=fire` - Filtrar por tipo
- `GET /pokemons/:id` - Obtener por ID
- `POST /pokemons` - Crear nuevo
- `PUT /pokemons/:id` - Actualizar
- `DELETE /pokemons/:id` - Eliminar

### Types
- `GET /types` - Listar todos los tipos
- `GET /types/:id` - Obtener tipo por ID
- `POST /types` - Crear nuevo tipo

## Deploy en Railway/Vercel

1. Crea una cuenta en [Turso](https://turso.tech)
2. Crea una base de datos
3. Copia las credenciales a las variables de entorno
4. Ejecuta las migraciones en producción
5. Deploy!
