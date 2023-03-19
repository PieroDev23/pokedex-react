import { Type, Stat, Species } from "./http.interfaces";

export interface Pokemon {
  name: string;
  id: number;
  sprite: string;
  data: PokemonData;
}

export interface PokemonData {
  abilities: Array<Species>;
  stats: Array<Stat>;
  hp: string;
  types: Array<string>;
}
