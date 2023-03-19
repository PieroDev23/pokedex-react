import { useState } from "react";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";

import { Pokemon } from "./interfaces/pokemon";
import { initPokemon } from "./data/constants";
import { Container, Header, Heading, Img, Main } from "./styled/app.styled";
import PokedexLogo from "./img/pokedex_logo.png";

interface AppState {
  pokemon: Pokemon;
  loader: boolean;
}

function App() {
  const [pokemon, setPokemon] = useState<AppState["pokemon"]>(initPokemon);
  const [loaded, setLoaded] = useState<AppState["loader"]>(false);

  const handleSetPokemon = (pokemon: Pokemon) => {
    setTimeout((_) => {
      setPokemon(pokemon);
      handleLoaded(true);
    }, 1000);
  };

  const handleLoaded = (state: boolean) => {
    setLoaded(state);
  };

  return (
    <Container>
      <Header>
        <Heading>
          React Pokedex | Custom Hooks, Fetch API, Styled Components
        </Heading>
      </Header>
      <Main>
        {loaded ? <Card pokemon={pokemon} /> : <Img src={PokedexLogo}></Img>}
        <div className="form_container">
          <Form
            handleSetPokemon={handleSetPokemon}
            handleLoaded={handleLoaded}
          />
        </div>
      </Main>
    </Container>
  );
}

export default App;
