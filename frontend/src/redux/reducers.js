import { combineReducers } from 'redux';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SEARCH_LOADING':
      return true;
    case 'SET_SEARCH_SUCCESS':
    case 'SET_SEARCH_ERROR':
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_LOADING':
    case 'SET_SEARCH_SUCCESS':
      return '';
    case 'SET_SEARCH_ERROR':
      return action.payload;
    default:
      return state;
  }
};

const pokemonReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SEARCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const pokemonNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_POKEMON_NAME':
      return action.payload;
    default:
      return state;
  }
};

const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return action.payload;
    case 'APPEND_POKEMON_LIST':
      return [...state, ...action.payload]; // Append the new Pokemon to the existing list
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  pokemon: pokemonReducer,
  pokemonName: pokemonNameReducer,
  pokemonList: pokemonListReducer,
});

export default rootReducer;
