
import React, { Component, Fragment } from 'react'
import Layout from '../../components/Layout/Layout'
import PokemonList from '../../components/PokemonList/PokemonList'
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'
import Header from '../../components/Header/Header';
import { getPokemon } from '../../services/pokemonApi';
import './PokemonView.css';

class PokemonView extends Component {
  state = {
    pokemonlist: [],
    pokemonSelected: {}
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    const that = this;
    getPokemon()
    .then(list => {
      console.log(list);
      that.setState({
        pokemonlist: list
      });
    }); 
  }

  openPokemonDetail = (pokemon) => {
    this.setState({
      pokemonSelected: pokemon
    });
  }

  render() {
    const { pokemonlist, pokemonSelected } = this.state;
    
    return (
      <Fragment>
        <Header />
        <Layout className="PokemonView">
          <PokemonList list={pokemonlist} openPokemonDetail={this.openPokemonDetail} pokemonSelected={pokemonSelected} />
          <PokemonDetail />
        </Layout>
      </Fragment>
    )
  }
}

export default PokemonView;