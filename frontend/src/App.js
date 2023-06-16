import React from 'react';
import { Provider } from 'react-redux';
import SearchPage from './components/SearchPage';
import PokemonInfo from './components/PokemonInfo';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Pokemon Search</h1>
        <SearchPage />
        <PokemonInfo />
      </div>
    </Provider>
  );
};

export default App;
