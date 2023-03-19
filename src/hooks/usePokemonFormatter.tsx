import { PokemonResponse, Species, Stat } from "@/interfaces/http.interfaces";

export default function usePokemonFormatter(pokemon: PokemonResponse) {
  const {
    stats,
    id,
    name,
    abilities,
    types,
    sprites: { front_default },
  } = pokemon;

  //Getting the hp only as a string 
  const getHp = (): string => (stats.at(0) as Stat).base_stat.toString();
  //Removing hp Object fron Stat Array cuz its no need it
  const newStats = (): Array<Stat> => stats.filter((data) => data.stat.name !== "hp");
  //Creating a new array of types, wich contain just strings, easy to handle
  const newTypes = (): Array<string> => types.map((entrie) => entrie.type.name);
  //Same here
  const newAbilities = (): Array<Species> => abilities.map(abilitie => abilitie.ability)

  const newPokemon = {
    id,
    name,
    sprite: front_default,
    data: {
      abilities: newAbilities(),
      stats: newStats(),
      hp: getHp(),
      types: newTypes(),
    },
  };

  return { newPokemon }
}
