import React from 'react';
import PokemonThumbnail from '../PokemonThumbnail/PokemonThumbnail';
import './PokemonCard.css';
import PokemonType from '../PokemonType/PokemonType';

const PokemonCard = ({ 
  pathImage,
  name,
  isSelected,
  handleClick,
  number,
  types
}) => {
  return (
    <div
      className={`PokemonCard ${isSelected ? 'PokemonCard--selected' : '' }`}
      onClick={handleClick}
    >
      <PokemonThumbnail alt="Pokémon" pathImage={pathImage} className="PokemonCard__img" />
      <div className="PokemonCard__contentTypes">
        {
          types && types.map(type => (<PokemonType type={type.type.name} />))
        }
      </div>
      <div className="PokemonCard__contentLabel">
        <label className="PokemonCard__label">{name}</label>
      </div>
      <span className="PokemonCard__number">#{number}</span>
    </div>
  )
}

export default PokemonCard;