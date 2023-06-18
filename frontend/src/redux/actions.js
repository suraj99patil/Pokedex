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

export const setPokemonList = (pokemonList) => {
  return {
    type: 'SET_POKEMON_LIST',
    payload: pokemonList,
  };
};

export const fetchPokemonList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const { results } = response.data;
      const pokemonDetailsPromises = results.map((pokemon) => axios.get(pokemon.url));
      const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);
      const pokemonList = pokemonDetailsResponses.map((response) => response.data);

      dispatch(setPokemonList(pokemonList));
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  };
};

export const fetchPokemon = (pokemonName) => {
  return (dispatch) => {
    dispatch(setSearchLoading());

    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const pokemon = response.data;
        dispatch(setSearchSuccess(pokemon));
        return { success: true };
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          dispatch(setSearchError('Pokemon not found'));
        } else {
          dispatch(setSearchError('An error occurred'));
        }
        return { success: false };
      });
  };
};
