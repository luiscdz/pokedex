import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'
import PokemonView from '../../containers/PokemonView/PokemonView'


class Pokedex extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PokemonView />
      </Fragment>
    );
  }
}


export default Pokedex;