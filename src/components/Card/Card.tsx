import React, { useEffect, useState } from 'react';
import { ICardItem } from '../CardItems/CardItems.model';
import { getPokemon } from '../../utils/PokemonAPI';
import './Card.scss';

export const Card = (props: ICardItem) => {
  const [pokemon, setPokemon] = useState<any>({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res: any = await getPokemon(props.url);
        setPokemon(res);
      } catch(error) {
        console.log('Fetch error: ', error);
      }
    };

    fetchPokemon();
  }, []);

  const handleClick = () => {
    setIsSelected(isSelected => !isSelected);
  }

  return (
    <div>
      <div className="overlay" style={{display: isSelected ? "block" : "none"}}></div>
        <div className={isSelected ? "card selected" : "card"}>
        {isSelected
            ? <div className="card--secondary">
                <button className="card--secondary--button"  onClick={handleClick}>x</button>
                <h3 className="card--secondary--name" data-testid="cardTitle">
                  {props.name}
                </h3>
                <div className="card--secondary--stats">
                  <div>{"Height: " + (pokemon.height / 10 )+ "m" }</div>
                  <div>{"Weight: " + (pokemon.weight / 10) + "kg"}</div>
                  <div className="card--secondary--stats--lists">
                    <ul>
                    <h4 className="card--secondary--stats--lists--header"> Abilities</h4>
                    {pokemon.abilities.map((ability: any) =>
                        <li key={ability.ability.name} >{ability.ability.name}</li>
                    )}
                    </ul>
                    <ul>
                    <h4 className="card--secondary--stats--lists--header"> Types</h4>
                    {pokemon.types.map((type: any) =>
                        <li key={type.type.name} >{type.type.name}</li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            : <div className="card--primary">
                <img
                src={pokemon.sprites && pokemon.sprites.front_default}
                alt="pokemon icon"
              />
              <h3 className="card--primary--name" data-testid="cardTitle">
                {props.name}
              </h3>
              <button className="card--primary--button"  onClick={handleClick}>More</button>
            </div>
          }
        </div>
    </div>
  );
}
