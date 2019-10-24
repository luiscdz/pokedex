import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ image, name }) => {
  return (
    <div className="PokemonCard">
      <img alt="Pokémon" src={image} className="PokemonCard__img" />
      <div class="PokemonCard__contentLabel">
        <label className="PokemonCard__label">{name}</label>
      </div>      
    </div>
  )
}

export default PokemonCard;