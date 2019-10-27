import React from 'react';
import Layout from '../Layout/Layout';
import PokemonView from '../../containers/PokemonView/PokemonView';
import './App.css';

const App = () => {
  return (
    <Layout className="App">
      <PokemonView />
    </Layout>
  );
}

export default App;
