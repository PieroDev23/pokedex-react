export interface Option {
  id: number;
  name: string;
}

export interface FormState {
  error: boolean;
  entries: Array<Option>;
}

export interface FormProps {
  handleSetPokemon: (pokemon: Pokemon) => void;
  handleLoaded: (state: boolean) => void;
}
