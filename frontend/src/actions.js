import axios from 'axios';

export const setSearchLoading = () => {
  return {
    type: 'SET_SEARCH_LOADING',
  };
};

export const setSearchSuccess = (pokemon) => {
  return {
    type: 'SET_SEARCH_SUCCESS',
    payload: pokemon,
  };
};

export const setSearchError = (error) => {
  return {
    type: 'SET_SEARCH_ERROR',
    payload: error,
  };
};

export const setPokemonName = (name) => {
  return {
    type: 'SET_POKEMON_NAME',
    payload: name,
  };
};

export const fetchPokemon = (pokemonName) => {
  return (dispatch) => {
    dispatch(setSearchLoading());

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const pokemon = response.data;
        dispatch(setSearchSuccess(pokemon));
      })
      .catch((error) => {
        dispatch(setSearchError(error.message));
      });
  };
};

