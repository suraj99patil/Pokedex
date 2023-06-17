import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, fetchPokemonList, setPokemonName, setSearchError } from '../redux/actions';

const SearchPage = () => {
  const pokemonName = useSelector(state => state.pokemonName);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (pokemonName) {
      dispatch(fetchPokemon(pokemonName.toLowerCase()))
        .then(response => {
          if (response.success) {
            dispatch(fetchPokemonList());
            dispatch(setSearchError(''));
          } else {
            dispatch(setSearchError('Pokemon not found'));
          }
        })
        .catch(error => {
          dispatch(setSearchError('Error occurred during search'));
          console.error('Search API error:', error);
        });
    } else {
      dispatch(setSearchError('Please enter a Pokemon name'));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => dispatch(setPokemonName(e.target.value))}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SearchPage;
