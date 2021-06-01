# Project - Pokemon App

<p align="left">
  <img height="150" src="./pokemon.png" alt="Pokemon" />
</p>

## Starting

How to start this project:

The project has two folders: `api` and` client`. In these folders is the code for the back-end and the front-end respectively.
In `api` complete the file called:` .env_ example` with the data from the database.
Additionally it will be necessary to create from psql a database called `pokemon`
The content of `client` was created using: Create React App. 

## About this App 

The general idea is to create an application in which the different Pokemon can be seen using the external api  [pokeapi](https://pokeapi.co/)  and from there, among other things:

  - Search pokemons
  - Filter / Sort them
  - Create new pokemons 

#### Used technology:
- [ ] Material-UI
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - PostgreSQL

#### Frontend

A React / Redux application was developed containing the following screens / paths.

__Main page__:
- [] It has a background image representative of the project
- [] Button to enter home (`Main route`)

__Main route__:
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
- [ ] At least you have a database model with its respective tests 
