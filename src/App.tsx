import React, { useEffect, useState } from 'react';
import { CardItems } from './components/CardItems/CardItems';
import { ICardItem } from './components/CardItems/CardItems.model';
import { getFirstGeneration } from './utils/PokemonAPI';
import './App.scss';

function App() {
  const [fistGenPokemon, setFistGenPokemon] = useState<ICardItem[]>([]);

  useEffect(() => {
    const getFistGenPokemon = async () => {
      try {
        const res: any = await getFirstGeneration();
        setFistGenPokemon(res.results);
      } catch(error) {
        console.log('Fetch error: ', error);
      }
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
