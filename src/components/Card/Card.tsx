import React, { useEffect, useState } from 'react';
import * as PokemonAPI from "../../utils/PokemonAPI";
import { ICardItem } from '../CardItems/CardItems.model';
import './Card.scss';

export const Card = (props: ICardItem) => {
  const [pokemon, setPokemon] = useState<any>({});

  useEffect(() => {
    const getPokemon = async () => {
      const res: any = await PokemonAPI.getPokemon(props.url);
      setPokemon(res);
      console.log(res);
    };

    getPokemon();
  }, []);

  return (
    <div className="card">
        <img
          src={pokemon.sprites && pokemon.sprites.front_default}
          alt=""
        />
      <div className="card--name">
        {pokemon.name}
      </div>
      <div className="card--button">
        
      </div>
    </div>
  );
}
