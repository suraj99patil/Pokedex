import React from 'react';
import { Provider } from 'react-redux';
import SearchPage from './components/SearchPage';
import PokemonInfo from './components/PokemonInfo';
import ListingPage from './components/ListingPage';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Pokemon Search</h1>
        <SearchPage />
        {<PokemonInfo />}
        {<ListingPage />}
      </div>
    </Provider>
  );
};

export default App;
