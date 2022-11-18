import React, { useEffect } from 'react';
import * as PokemonAPI from "./utils/PokemonAPI";
import './App.scss';

function App() {

  useEffect(() => {
    const getFistGenPokemon = async () => {
      const res: any = await PokemonAPI.getFirstGeneration();
      console.log(res.results);
    };

    getFistGenPokemon();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
      </header>
    </div>
  );
}

export default App;
