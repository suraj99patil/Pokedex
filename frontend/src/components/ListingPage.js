// import React from 'react';
// import { useSelector } from 'react-redux';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchPokemonList } from '../redux/actions';

// const ListingPage = () => {
//   const pokemon = useSelector(state => state.pokemon);
//   const pokemonList = useSelector(state => state.pokemonList);

//   if (!pokemonList) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <div className="pokemon-item">
//         <h2>{pokemon.name}</h2>
//         <img
//           src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//           alt={pokemon.name}
//         />
//       </div>

//       <div className="pokemon-list">
//         <InfiniteScroll
//           dataLength={pokemonList.length} // Total number of items you have
//           next={fetchPokemonList} // Function to fetch more data when scrolling reaches the end
//           hasMore={true} // Boolean indicating whether there is more data to be loaded
//           loader={<h4>Loading...</h4>} // JSX element to display while loading new data
//         >
//           {pokemonList.map(pokemon => (
//             <div key={pokemon.name} className="pokemon-item">
//               <img
//                 src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//                 alt={pokemon.name}
//               />
//               <p>{pokemon.name}</p>
//             </div>
//           ))}
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default ListingPage;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPokemonList, appendPokemonList } from '../redux/actions';

const ListingPage = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const pokemonList = useSelector((state) => state.pokemonList);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const fetchMoreData = async () => {
    try {
      const response = await dispatch(fetchPokemonList());
      const newPokemonList = response.payload;

      if (newPokemonList.length === 0) {
        setHasMore(false); // No more data to fetch
      } else {
        dispatch(appendPokemonList(newPokemonList)); // Append the new Pokemon list to the existing list
      }
    } catch (error) {
      console.error('Error fetching more Pokemon:', error);
    }
  };

  if (!pokemonList) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="pokemon-item">
        <h2>{pokemon.name}</h2>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
        />
      </div>

      <div className="pokemon-list">
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-item">
              <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ListingPage;


