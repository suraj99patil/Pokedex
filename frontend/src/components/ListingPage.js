import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/actions';

const ListingPage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (!pokemonList) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemon-list">
      {pokemonList.map(pokemon => (
        <div key={pokemon.name} className="pokemon-item">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingPage;
