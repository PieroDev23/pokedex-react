import { colorTypes, borderColors } from "@/data/constants";
import { formatSDSA, generateId } from "@/helpers/functions.helpers";
import { CardProps } from "@/interfaces/card.interfaces";
import {
  CardContainer,
  CardHeader,
  CardBody,
  Thumbnail,
} from "@/styled/card.styled";
import { ThemeProvider } from "styled-components";

export default function Card({ pokemon }: CardProps) {
  const type = pokemon.data.types.at(0) as string;

  const theme = {
    bg: colorTypes[type],
    bc: borderColors[type],
  };

  return (
    <div className="card_wrapper">
      <ThemeProvider theme={theme}>
        <CardContainer>
          <CardHeader>
            <div className="hp_container">
              <span>💕{pokemon.data.hp}HP</span>
            </div>

            <div className="name_container">
              <h3>{pokemon.name}</h3>
              <p style={{ color: colorTypes[type] }}>
                {pokemon.data.types.join(", ")}
              </p>
            </div>

            <div className="number_container">
              <span>Nro: #{pokemon.id}</span>
            </div>
          </CardHeader>
          <CardBody>
            <div className="thumbnail_wrapper">
              <Thumbnail src={pokemon.sprite} />
            </div>
            <div className="data_container">
              <div className="abilities">
                <h4>💪 Abilities</h4>
                <ul>
                  {pokemon.data.abilities.map((abilitie) => (
                    <li key={generateId()}>
                      <span className="abilitie">{abilitie.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stats">
                <h4>📊 Stats</h4>
                <ul>
                  {pokemon.data.stats.map((element) => (
                    <li key={generateId()}>
                      <span className="stat">
                        {formatSDSA(element.stat.name)}:
                      </span>{" "}
                      {element.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      </ThemeProvider>
    </div>
  );
}
