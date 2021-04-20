import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav className='navbar  navbar-expand-lg navbar-dark bg-primary'>
        
        <Link className='navbar-brand' to='/'>
          {`<POKEMON/>`}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-link ' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/pokemon/:pokemonName'>
               Pokemon
            </Link>
           
            
          </div>
        </div>
        
      </nav>

    )
}
export default NavBar;