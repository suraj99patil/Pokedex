import React from 'react';
import { useSelector } from 'react-redux';

const ListingPage = () => {
  const pokemonList = useSelector(state => state.pokemonList);

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
