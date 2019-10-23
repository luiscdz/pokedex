import React from 'react'
import searchImg  from '../../assets/search.png';
import './Search.css';

const Search = () => {
  return (
    <div className="Search">
      <input type="text" className="Search__input" placeholder="Buscar Pokémon" /> 
      <img src={searchImg} className="Search__img" alt="Lupa" />     
    </div>
  )
}

export default Search
