import React from 'react';
import { Link } from 'react-router-dom';
import { setTypeColor } from '../services';

interface TodoListProps {
    pokemon: Pokemon;
   
  }

const PokemonCard: React.FC<TodoListProps> = ({pokemon}) => {
    return (
        <div className='card'>
        <div className='row no-gutters'>
          <div className='col-sm-12 col-md-2'>
            <div className='img-container text-center d-flex justify-content-center align-items-center'>
              <img src={pokemon.img} alt={pokemon.name} />
            </div>
          </div>
          <div className='col-sm-12 col-md-10'>
            <div className='card-body'>
              {/* Card Title */}
              <h3 className='card-title'>
                {pokemon.name}{' '}
                <span className='text-secondary'>#{pokemon?.num}</span>
              </h3>
              {/* divider */}
              <hr />
              {/* Pokemon Details */}
              <div className='row'>
                <div className='col'>
                  <div className='text-secondary'>Height</div>
                  <div>{pokemon.height}</div>
                  <div className='text-secondary'>Weight</div>
                  <div>{pokemon.weight}</div>
                  <div className='text-secondary'>Candy</div>
                  <div>{pokemon.candy}</div>
                  <div className='text-secondary'>Counts</div>
                  <div>{pokemon.candy_count}</div>
                  <div className='text-secondary'>Egg</div>
                  <div>{pokemon.egg}</div>
                </div>
                <div className='col'>
                <div className='text-secondary'>Spawn Chance</div>
                  <div>{pokemon.spawn_chance}</div>
                  <div className='text-secondary'>Average Spawns</div>
                  <div>{pokemon.avg_spawns}</div>
                  <div className='text-secondary'>Spawn Time</div>
                  <div>{pokemon.spawn_time}</div>
                  <div className='text-secondary'>Type</div>
                  <div>
                    {pokemon.type.map((t, i) => {
                      return (
                        <span
                          className='badge badge-pill text-white mx-1'
                          style={{ backgroundColor: setTypeColor(t) }}
                          key={i}>
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  <div className='text-secondary'>Weaknesses</div>
                  <div>
                    {pokemon.weaknesses.map((w, i) => {
                      return (
                        <span
                          className='badge badge-pill text-white mx-1'
                          style={{ backgroundColor: setTypeColor(w) }}
                          key={i}>
                          {w}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* divider */}
              <hr />
              <div className='row'>
                {pokemon.prev_evolution?.map((pe, i) => {
                  return (
                    <div className='col' key={i}>
                      <h5 className='text-secondary'>
                        Previous Evolution
                      </h5>
                      <div>
                        <Link to={`/pokemon/${pe.name.toLowerCase()}`}>
                          {pe.name}
                        </Link>
                      </div>
                      <img src={pe.img} alt={pe.name} />
                    </div>
                  );
                })}
                {pokemon.next_evolution?.map((ne, i) => {
                  return (
                    <div className='col' key={i}>
                      <h5 className='text-secondary'>Next Evolution</h5>
                      <div>
                        <Link to={`/pokemon/${ne.name.toLowerCase()}`}>
                          {ne.name}
                        </Link>
                      </div>
                      <img src={ne.img} alt={ne.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
export default PokemonCard;