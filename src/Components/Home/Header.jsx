import React from 'react';
import logo from '../../Assets/LOGO.png';
import '../../Scss/components/_Header.scss'
import {Link} from "react-router-dom";


function Header() {
  return (
    <div className='HeaderBar'>
      <div className='Logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='NavHeader'>
          <div>
              <Link to={"/"}><p id='NavAcceuil'> Accueil </p></Link>
          </div>

          <div>
              <Link to={"/apropos"}>   <p id='A-propos'> A propos </p>  </Link>

          </div>
          
       
      </div>
    </div>
          
  )
};

export default Header