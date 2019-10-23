
import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout'
import PokemonList from '../../components/PokemonList/PokemonList'
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'
import './PokemonView.css';

class PokemonView extends Component {
  render() {
    return (
      <Layout className="PokemonView">
        <PokemonList />
        <PokemonDetail />
      </Layout>
    )
  }
}

export default PokemonView;