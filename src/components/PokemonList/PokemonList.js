import React, { Fragment } from 'react';
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';

const PokemonList = ({ list, pokemonSelected, openPokemonDetail }) => {
  return (
    <Fragment>
      {
        list && list.length > 0
        ? <div className="PokemonList">
            {
              list.map( pokemon => (
                <PokemonCard
                  key={pokemon.id}
                  isSelected={pokemonSelected.id === pokemon.id}
                  pathImage={pokemon.sprites.front_default}
                  name={pokemon.name}
                  number={pokemon.id}
                  types={pokemon.types}
                  handleClick={() => { openPokemonDetail(pokemon) }}
                />
              ))
            }
        </div>
        : (
          <div className="PokemonList--loading">
            <Loader />
          </div>
        )
      }
  </Fragment>
  )
}

export default PokemonList;

