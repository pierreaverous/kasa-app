import React from 'react';
import logo from '../../Assets/LOGO.png';
import '../../Scss/components/_Header.scss'

function Header() {
  return (
    <div className='HeaderBar'>
      <div className='Logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='NavHeader'>
        <p id='NavAcceuil'>
          Accueil
        </p>
        <p id='A-propos'>
          A propos
        </p>
      </div>
    </div>
          
  )
};

export default Header