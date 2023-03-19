//hooks
import { useEffect, useState } from "react";
import useSelectPokedex from "@/hooks/useSelectRegion";
import usePokemonFormatter from "@/hooks/usePokemonFormatter";

import { regions } from "@/data/constants";
import { PokemonResponse, RegionEntries } from "@/interfaces/http.interfaces";
import { FormProps, FormState, Option } from "@/interfaces/form.interfaces";

import { InputSubmit } from "@/styled/form.styled";
import ErrorMsg from "@/Components/Error/Error";

export default function Form({ handleSetPokemon, handleLoaded }: FormProps) {
  const [entries, setPkmEntries] = useState<FormState["entries"]>([]);
  const [error, setError] = useState<FormState["error"]>(false);

  const [region, SelectRegion] = useSelectPokedex("Choose region", regions);
  const [pokemon, SelectPkm] = useSelectPokedex("Choose pokemon", entries);

  useEffect(() => {
    if (!region) return;

    const fetchAPI = async (): Promise<void> => {
      const url = `https://pokeapi.co/api/v2/pokedex/${region}`;
      const response = await fetch(url);
      const data: RegionEntries = await response.json();
      const arrayPkmnEntries: Array<Option> = data.pokemon_entries.map(
        (entrie) => {
          return {
            id: entrie.entry_number,
            name: entrie.pokemon_species.name,
          };
        }
      );

      setPkmEntries(arrayPkmnEntries);
    };

    fetchAPI();
  }, [region]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if ([region, pokemon].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    handleLoaded(false);
    fetchPkmn();
  };

  //Fetching the pokemon
  const fetchPkmn = async (): Promise<void> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const pkmn: PokemonResponse = await response.json();
    const { newPokemon } = usePokemonFormatter(pkmn);

    handleSetPokemon(newPokemon);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <ErrorMsg>Invalid input</ErrorMsg>}
        <SelectRegion />
        <SelectPkm />
        <InputSubmit type="submit" value="Show Data" />
      </form>
    </>
  );
}
