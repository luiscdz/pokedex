import React from 'react'
import SearchPokemon from '../../containers/SearchPokemon/SearchPokemon';
import logo from '../../assets/logo.webp';
import './Header.css';

const Header = ({ onSearch, onCancel }) => {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="Logo Pokémon" />
      <SearchPokemon onSearch={onSearch} onCancel={onCancel} />
    </header>
  )
}

export default Header
