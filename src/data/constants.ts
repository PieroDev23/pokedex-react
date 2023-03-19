const regions = [
  {
    id: 2,
    name: "kanto",
  },
  {
    id: 3,
    name: "original-johto",
  },
  {
    id: 4,
    name: "hoenn",
  },
];

const colorTypes: { [key: string]: string } = {
  grass: "#B7EAA5",
  bug: "#8AC482",
  fairy: "#FBACBE",
  normal: "#F1D6B8",
  water: "#697EDB",
  rock: "#A18276",
  fighting: "#FDB172",
  electric: "#EBCC70",
  fire: "#FDA55E",
  flying: "#A3D3E0",
  poison: "#7C73BF",
  ghost: "#3A2449",
  ice: "#6FBFD8",
  steel: "#7E94A0",
  dragon: "#006992",
  ground: "#A7767C",
  dark: "#2B1155",
  shadow: "#56254C",
  psychic: "#EA3489",
  unknown: "#D9D7DD",
};

const borderColors: { [key: string]: string } = {
  grass: "#7BD85A",
  bug: "#63B159",
  fairy: "#F86386",
  normal: "#E0A767",
  water: "#4A63D3",
  rock: "#86675B",
  fighting: "#FC8F36",
  electric: "#E3B93B",
  fire: "#FD790D",
  flying: "#75BDD1",
  poison: "#6257B2",
  ghost: "#2C1B37",
  ice: "#3092B0",
  steel: "#576B75",
  dragon: "#00587A",
  ground: "#89585D",
  dark: "#220D44",
  shadow: "#471F3F",
  psychic: "#B91360",
  unknown: "#8C8698",
};

const initPokemon = {
  id: 0,
  sprite: "",
  name: "",
  data: {
    abilities: [],
    hp: "",
    stats: [],
    types: [],
  },
};

export { regions, colorTypes, initPokemon, borderColors };
