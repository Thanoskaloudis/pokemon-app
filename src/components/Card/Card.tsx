import React, { useEffect, useState } from 'react';
import * as PokemonAPI from "../../utils/PokemonAPI";
import { ICardItem } from '../CardItems/CardItems.model';
import './Card.scss';

export const Card = (props: ICardItem) => {
  const [pokemon, setPokemon] = useState<any>({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const res: any = await PokemonAPI.getPokemon(props.url);
      setPokemon(res);
      console.log(res);
    };

    getPokemon();
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
            <h3 className="card--secondary--name">
              {pokemon.name}
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
          <div className="card--primary--name">
            {pokemon.name}
          </div>
          <button className="card--primary--button"  onClick={handleClick}>More</button>
        </div>
      }
    </div>
    </div>
  );
}
