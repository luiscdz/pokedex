import React from 'react'
import pokemonImg from '../../assets/pokemon_detail.png'
import './PokemonDetail.css'; 

const PokemonDetail = () => {
  return (
    <div className="PokemonDetail">
      <img src={pokemonImg} alt="Pikachu Pokémon" />
    </div>
  )
}

export default PokemonDetail;