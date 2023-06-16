import React from 'react';
import { useSelector } from 'react-redux';

const PokemonInfo = () => {
  const pokemon = useSelector(state => state.pokemon);

  if (!pokemon) {
    return null; // Render nothing if no Pokemon data is available
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonInfo;
