import React from 'react'
import './PokemonThumbnail.css';

const PokemonThumbnail = ({ pathImage, className, alt }) => {
  return (
    <div className="PokemonThumbnail">
      <img alt={alt} src={pathImage} className={className} />
    </div>
  )
}

export default PokemonThumbnail
