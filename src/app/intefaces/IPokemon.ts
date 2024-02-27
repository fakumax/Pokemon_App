export interface IPokemon {
  id: number;
  name: string;
  abilities?: AbilitiesEntity[] | undefined;
  base_experience: number;
  height?: number | undefined;
  order: number;
  sprites: Sprites;
  stats?: StatsEntity[] | undefined;
  types: TypesEntity[];
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
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;
}
export interface Other {
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

export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: abilities;
}
export interface TypesEntity {
  slot: number;
  type: abilities;
}
