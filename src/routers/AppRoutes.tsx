import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import SinglePokemonPage from '../pages/SinglePokemon';
import NavBar from '../pages/NavBar';

const AppRoutes: React.FC = () => {
  return (
    <div id='app-router'>
      <NavBar/>
       <div className='container'>
     
     <Switch>
       <Route path='/' exact component={HomePage} />
       <Route
         path='/pokemon/:pokemonName'
         exact
         component={SinglePokemonPage}
       />
     </Switch>
     {/* Footer */}
   </div>

    </div>
   
  );
};

export default AppRoutes;
