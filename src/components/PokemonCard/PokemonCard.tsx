"use client";

export interface PokemonListProps {
  id: number;
  name: string;
  abilities?: AbilitiesEntity[] | undefined;
  base_experience: number;
  height: number | undefined;
  sprites: any;
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

interface listPokemonProps {
  listPokemon: PokemonListProps[];
}

const PokemonCard = ({ listPokemon }: listPokemonProps): JSX.Element => {
  console.log("listpokemon", listPokemon);
  return (
    <>
      {listPokemon.map((poke) => {
        console.log("poke", poke.name);

        {
          return (
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={poke.sprites.front_default}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {poke.name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Button
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
export { PokemonCard };
