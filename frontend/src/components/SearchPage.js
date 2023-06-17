import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, setPokemonName } from '../redux/actions';

const SearchPage = () => {
  const pokemonName = useSelector(state => state.pokemonName);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchPokemon(pokemonName && pokemonName.toLowerCase()));
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
