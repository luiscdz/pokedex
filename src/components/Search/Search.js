import React from 'react'
import searchImg  from '../../assets/search.png';
import './Search.css';

const Search = ({ inputSearch, onSearch, onCancel, onChange, isTyping, onKeyPress }) => {
  return (
    <div className="Search">
      <input
        type="text" 
        className="Search__input" 
        placeholder="Find Pokémon...." 
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={inputSearch} 
      />
      <button  onClick={onCancel} className="Search__button">
        { !isTyping ? <img src={searchImg} className="Search__img" alt="Lupa" />
        : <span className="Search__close">X</span>
        }
      </button>
    </div>
  )
}

export default Search
