-- CreateTable
CREATE TABLE "Pokemon" (
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

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PokemonType" (
    "pokemonId" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    PRIMARY KEY ("pokemonId", "typeId"),
    CONSTRAINT "PokemonType_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PokemonType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");
