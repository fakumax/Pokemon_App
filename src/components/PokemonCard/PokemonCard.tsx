"use client";

import Image from "next/image";

export interface PokemonListProps {
  id: number;
  name: string;
  abilities?: AbilitiesEntity[] | undefined;
  base_experience: number;
  height: number | undefined;
  sprites: Sprites;
  hp?: number | undefined;
  attack?: number | undefined;
  defense?: number | undefined;
  specialAttack?: number | undefined;
  specialDefense?: number | undefined;
  speed?: number | undefined;
  accuracy?: number | undefined;
  evasion?: number | undefined;
  types: string[];
  weight: number;
}
export interface AbilitiesEntity {
  ability: abilities;
  is_hidden: boolean;
  slot: number;
}
export interface abilities {
  name: string;
  url: string;
}

export interface Sprites {
  dream_world: DreamWorldOrIcons;
  home: OtherImageOthers;
  officialArtwork: OfficialartworkOrEmerald;
  showdown: OtherImageShowdown;
}

export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}
export interface OtherImageOthers {
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface OfficialartworkOrEmerald {
  front_default: string;
  front_shiny: string;
}
export interface OtherImageShowdown {
  backdefault: string;
  backfemale?: null;
  backshiny: string;
  backshinyfemale?: null;
  frontdefault: string;
  frontfemale?: null;
  frontshiny: string;
  frontshinyfemale?: null;
}
interface listPokemonProps {
  listPokemon: PokemonListProps[];
}

const PokemonCard = ({ listPokemon }: listPokemonProps): JSX.Element => {
  console.log("listpokemon", listPokemon);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {listPokemon.map((poke, index) => (
        <div
          key={index}
          className="rounded-xl   max-w-sm	 	 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <Image
              className="rounded-t-lg"
              width={500}
              height={500}
              src={poke.sprites.home.front_default}
              alt=""
            />
          </a>
          <div className="p-6">
            <h4 className="mb-4 text-4xl font-medium text-center text-neutral-800 dark:text-neutral-50 uppercase">
              {poke.name}
            </h4>
            <button
              type="button"
              className=" sm:hidden rounded bg-primary px-6 pb-2 pt-2.5 mx-auto text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-sm dark:hover:shadow-none dark:focus:shadow-none dark:active:shadow-none"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
export { PokemonCard };
