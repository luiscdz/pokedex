import URL_API from '../constants/api';

const  getPokemon = async (pagination = {}) => {
  const data = {
    offset: 0,
    limit: 30,
    ...pagination
  };
  
  let response = [];

  let requestPokemon =  await fetch(`${URL_API}?offset=${data.offset}&limit=${data.limit}`, {
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

  return response;
}

export { 
  getPokemon
};

const getPokemonDetail = async (url) => {
  let request = await fetch(url);
  let response = await request.json();
  return response;
}