
import logo from '../../Assets/LOGO.png';
import './_Header.scss'
import {Link} from "react-router-dom";


function Header({selectedMenu = null}) {

  return (
    <div className='HeaderBar'>
      <div className='Logo'>
        <img  className="logoImg" src={logo} alt="Logo" />
      </div>
      <div id="HeaderMenu" >
          <div className={selectedMenu === 'Acceuil'? 'NavHeaderActive' : ''}>
              <Link className='borderBottom' to={"/"}><p id='NavAcceuil'> Accueil </p></Link>
          </div>

          <div className={selectedMenu === 'About'? 'NavHeaderActive' : ''}>
              <Link className='borderBottom' to={"/apropos"}>   <p id='A-propos'> A propos </p>  </Link>

          </div>
          
       
      </div>
    </div>
          
  )
};

export default Header