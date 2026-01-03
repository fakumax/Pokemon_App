# Project - Pokemon App 🎮

<p align="left">
  <img height="150" src="./pokemon.png" alt="Pokemon" />
</p>

## ✨ Features

A full-stack Pokemon application with:
- 🔍 Search Pokemon by name
- 🎯 Filter and sort Pokemon
- 🌓 Dark/Light theme toggle with localStorage persistence
- 📱 Responsive design
- ⚡ Fast API caching system
- 🎨 Modern UI with Material-UI

## 🚀 Starting

The project has two folders: `api` (backend) and `client` (frontend).

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies (from root folder):**
```bash
pnpm install
```

2. **Setup Backend:**
```bash
cd api
# Copy environment example
cp .env_example .env
# Edit .env with your configuration

# Generate Prisma client and push schema
npx prisma generate
npx prisma db push
```

3. **Run Development:**

From root folder:
```bash
# Run both frontend and backend
pnpm dev

# Or individually:
pnpm dev:api    # Backend on http://localhost:3001
pnpm dev:client # Frontend on http://localhost:3000
```

## 🛠️ Technology Stack

#### Frontend:
- ⚛️ **React 19** + Vite
- 🎨 **SCSS Modules** for styling
- 🔄 **Zustand** for state management
- 🌐 **Axios** for HTTP requests
- 🎯 **React Router DOM** for navigation
- 💅 **Material-UI** for components
- 🌓 **Theme System** with localStorage

#### Backend:
- ⚡ **Fastify 5.6.2** - Fast web framework
- 🗄️ **Prisma ORM 7.2.0** - Type-safe database
- 💾 **LibSQL/Turso** - SQLite compatible database
- 🔐 **Zod 4.3.4** - Schema validation
- 🌍 **@fastify/cors** - CORS support
- 📝 **dotenv** - Environment variables
- 🎯 **@prisma/adapter-libsql** - Database adapter

#### External API:
- 🎮 **PokeAPI** (https://pokeapi.co/) - Pokemon data with in-memory caching (1-hour TTL)

## 📱 Application Features
- [ ] Search input to find pokemons by name (The search will be exact, that is, it will only find the pokemon if the full name is entered)
- [ ] Area where you can see the list of pokemons. When starting, it loads the first results obtained from the `GET / pokemons` path and shows its:
  - Picture
  - Name
  - Types (Electric, Fire, Water, etc)
  
- [ ] Buttons / Options to filter by type of pokemon and by existing pokemon or created by us
- [ ] Buttons / Options to sort the pokemons both in ascending and descending order by alphabetical order and by force
- [ ] Paged to go looking and showing the following pokemons

__Detail Route of Pokemon__:
- [ ] The fields shown in the main path for each pokemon (image, name and types)
- [ ] Number of Pokemon (id)
- [ ] Statistics (life, strength, defense, speed)
- [ ] Height and weight

__Creating path__:
- [ ] A form __controlled__ with the fields mentioned in the pokemon detail
- [ ] Ability to select / add more than one type of pokemon
- [ ] Button / Option to create a new pokemon 

#### Database

The database model has the following entities: 

- [ ] Pokemon with the following properties:

   - ID (Number of Pokemon) *: It cannot be an ID of an existing pokemon in the pokeapi API
   - Name *
   - Life
   - Strenght
   - Defense
   - Speed
   - Height
   - Weight
   
- [ ] Type with the following properties:

   - ID
   - Name 

#### Backend

It is developer on a server in Node / Express with the following paths:

- [ ] __GET /pokemons__:
	- Get a list of the first 12 pokemons from pokeapi
	- I return only the necessary data for the main route 
- [ ] __GET /pokemons/{idPokemon}__:
    - Get the detail of a particular pokemon
    - Brings only the data requested in the pokemon detail path
    - works both for an id of an existing pokemon in pokeapi or one created by us 
- [ ] __GET /pokemons?name="..."__:
  - Gets the pokemon that exactly matches the name passed as a query 		parameter (It can be from pokeapi or created by us)
  - If there is no pokemon show a suitable message 
- [ ] __POST /pokemons__:
  - Receive the data collected from the controlled form of the pokemons 			creation path by body
  - Create a pokemon in the database 
- [ ] __GET /types__:
    - Get all the possible types of pokemons
    - Bring from pokeapi and save to database and then use it


#### Testing
- [ ] At least it has a frontend component with its respective tests
- [ ] At least it has a backend path with its respective tests
- [ ] At least it has a database model with its respective tests 
