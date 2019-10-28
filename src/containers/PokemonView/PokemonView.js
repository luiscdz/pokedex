
import React, { Component, Fragment } from 'react'
import Layout from '../../components/Layout/Layout'
import PokemonList from '../../components/PokemonList/PokemonList'
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'
import Header from '../../components/Header/Header';
import * as api from '../../services/pokemonApi';
import './PokemonView.css';

class PokemonView extends Component {
  state = {
    pokemonlist: [],
    pokemonSelected: {},
    nextPage: null,
    hasMorePokemon: true
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon(cancel = false) {
    const that = this;
    const { nextPage } = that.state;
    api
      .getPokemon(nextPage)
      .then(response => {
        console.log(response);
        const { pokemonlist  } = that.state;
        const  result = cancel ? response.results : [ ...pokemonlist, ...response.results]
        that.setState({
          nextPage: response.next,
          hasMorePokemon: true,
          pokemonlist: result
        });
      }); 
  }

  getPokemonByName(name) {
    const that = this;
    api.getPokemonByName(name).then(response => {
      console.log(response);
      that.setState({
        nextPage: null,
        hasMorePokemon: false,
        pokemonlist: [ response ]
      });
    }); 
  }

  openPokemonDetail = (pokemon) => {
    this.setState({
      pokemonSelected: pokemon
    });
  }

  cancelPokemonSearch = () => {
    this.getAllPokemon(true);
  }

  render() {
    const { pokemonlist, pokemonSelected, hasMorePokemon } = this.state;
    
    return (
      <Fragment>
        <Header onSearch={this.getPokemonByName.bind(this)} onCancel={this.cancelPokemonSearch} />
        <Layout className="PokemonView">
          <PokemonList
            list={pokemonlist} 
            pokemonSelected={pokemonSelected} 
            openPokemonDetail={this.openPokemonDetail} 
            getAllPokemon={this.getAllPokemon.bind(this)}
            hasMore={hasMorePokemon}
          />
          <PokemonDetail />
        </Layout>
      </Fragment>
    )
  }
}

export default PokemonView;