import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import PokemonInfo from './components/PokemonInfo';
import ListingPage from './components/ListingPage';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Pokemon Search</h1>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/pokemon/:id" element={<PokemonInfo />} />
            <Route path="/listing" element={<ListingPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
