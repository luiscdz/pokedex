import React, { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';
import './PokemonList.css';

const PokemonList = ({ 
  list,
  pokemonSelected,
  openPokemonDetail,
  getAllPokemon,
  hasMore
}) => {
  return (
    <Fragment>
      {
        list && list.length > 0
        ?  
          <InfiniteScroll
            pageStart={0}
            loadMore={() => { getAllPokemon(); } }
            hasMore={hasMore}
            loader={<Loader key={0} className="PokemonList__loader" />}
          >
            <div className="PokemonList">
          
              {
                list.map( pokemon => (
                  <PokemonCard
                    key={pokemon.id}
                    isSelected={pokemonSelected.id === pokemon.id}
                    pathImage={pokemon.sprites.front_default}
                    name={pokemon.name.split('-')[0]}
                    number={pokemon.id}
                    types={pokemon.types}
                    handleClick={() => { openPokemonDetail(pokemon) }}
                  />
                ))
              }
            </div>
          </InfiniteScroll>
        : (
          <div className="PokemonList--loading">
            <Loader key={1} />
          </div>
        )
      }
  </Fragment>
  )
}

export default PokemonList;

