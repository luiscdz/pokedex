import React from 'react'
import Search from '../Search/Search';
import logo from '../../assets/logo.webp';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="Logo Pokémon" />
      <Search />
    </header>
  )
}

export default Header
