import React from 'react';
import './PokemonType.css'

const PokemonType = ({ type }) => {
  return (
    <span className={`PokemonType PokemonType--${type}`}>{type}</span>
  )
};

export default PokemonType
