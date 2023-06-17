import React from 'react';
import { useSelector } from 'react-redux';

const PokemonInfo = () => {
  const pokemon = useSelector(state => state.pokemon);

  if (!pokemon) {
    return null; // Render nothing if no Pokemon data is available
  }

  // Get the Dream World image URL
  const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={imageUrl} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonInfo;
