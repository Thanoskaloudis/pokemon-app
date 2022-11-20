const api = "https://pokeapi.co/api/v2/";

const headers = {
  Accept: "application/json"
};

export const getFirstGeneration = () =>
  fetch(`${api}pokemon?limit=151&offset=0`, { headers })
    .then((res) => res.json())
    .then((data) => data);


export const getPokemon = (url: string) =>
fetch(`${url}`, { headers })
  .then((res) => res.json())
  .then((data) => data);