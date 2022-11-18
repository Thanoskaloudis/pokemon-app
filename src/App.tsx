import React, { useEffect, useState } from 'react';
import * as PokemonAPI from "./utils/PokemonAPI";
import './App.scss';
import { CardItems } from './components/CardItems/CardItems';
import { ICardItem } from './components/CardItems/CardItems.model';

function App() {
  const [fistGenPokemon, setFistGenPokemon] = useState<ICardItem[]>([]);

  useEffect(() => {
    const getFistGenPokemon = async () => {
      const res: any = await PokemonAPI.getFirstGeneration();
      setFistGenPokemon(res.results);
    };

    getFistGenPokemon();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <CardItems items={fistGenPokemon}/>
    </div>
  );
}

export default App;
