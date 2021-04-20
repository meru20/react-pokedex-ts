import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';

import PokemonCard from '../componenets/PokemonCard';

const SinglePokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { pokemonName } = useParams<{ pokemonName: string }>();

  useEffect(() => {
    let foundPokemon = pokemonData.find(
      pd => pd.name.toLowerCase() === pokemonName
    );
    
    setPokemon(updateEvolution(foundPokemon));
  }, [pokemonName]);

  const updateEvolution = (poke: Pokemon | undefined) => {
    // check for next_evolution && || prev_evolution
    //  loop through each of the evolution arrays
    // loop through the pokemon data set
    // find the pokemon in pokemonData that matches the evolution pokemon
    // set the evolution.img = pokemon.img
    // return our updatedPoke

    if (poke?.next_evolution) {
      poke.next_evolution.map(ne => {
        pokemonData.forEach(pd => {
          if (pd.name === ne.name) {
            ne.img = pd.img;
          }
        });
        return ne;
      });
    }

    if (poke?.prev_evolution) {
      poke.prev_evolution.map(pe => {
        pokemonData.forEach(pd => {
          if (pd.name === pe.name) {
            pe.img = pd.img;
          }
        });
        return pe;
      });
    }

  
    return poke;
  };
  return (
    <div id='single-page'>
      {pokemon ? (
        <div className='row mt-3'>
          <div className='col'>
           <PokemonCard pokemon={pokemon}/>
          </div>
        </div>
      ) : (
        <h2 className='text-center'>No Pokemon by that name was found!</h2>
      )}
    </div>
  );
};

export default SinglePokemonPage;
