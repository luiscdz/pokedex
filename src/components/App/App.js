import React from 'react';
import Pokedex from '../../pages/Pokedex/Pokedex';
import Layout from '../Layout/Layout';
import './App.css';

const App = () => {
  return (
    <Layout className="App">
      <Pokedex />
    </Layout>
  );
}

export default App;
