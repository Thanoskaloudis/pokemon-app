const api = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const headers = {
  Accept: "application/json"
};

export const getFirstGeneration = () =>
  fetch(`${api}`, { headers })
    .then((res) => res.json())
    .then((data) => data);