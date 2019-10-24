import React from 'react';
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import notFountPokeImg from '../../assets/not_found.png';

const PokemonList = () => {
  return (
    <div className="PokemonList">
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
      <PokemonCard image={notFountPokeImg} name="Not Found" />
    </div>
  )
}

export default PokemonList;

