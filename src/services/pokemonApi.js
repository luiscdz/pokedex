import URL_API from '../constants/api';

const  getPokemon = async (nextPage) => {
  let response = [];
  const url = nextPage || `${URL_API}?offset=0&limit=30`;

  let requestPokemon =  await fetch( url, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  });

  let jsonAllPokemon = await requestPokemon.json(); 
  let responsePokemon = await jsonAllPokemon.results;

  for ( let i = 0; i < responsePokemon.length; i++ ) {
    const requestDetail = await getPokemonDetail(responsePokemon[i].url);
    response = [ ...response, { ...responsePokemon[i], ...requestDetail }]
  }

  return {
    ...jsonAllPokemon,
    results: response
  };
}

const getPokemonDetail = async (url) => {
  let request = await fetch(url);
  let response = await request.json();
  return response;
}


const getPokemonByName = async (name) => {
  const url = `${URL_API}/${name}`;
  let request = await fetch(url);
  let response = await request.json();
  return response;
}

export { 
  getPokemon,
  getPokemonByName
};

