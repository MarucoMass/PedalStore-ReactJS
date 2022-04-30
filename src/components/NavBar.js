import CartWidget from './CartWidget';
import Logo from '../img/pedal-svgrepo-com.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
   
     <nav className="navbar navbar-expand-lg navbar-light Header">
       <div className="container-fluid Header-content">
         <Link to="/" className=" Header-brand"><span>Pedal</span>
           St<img src={Logo} alt='logo'width={25} height={25}></img>re</Link>
         <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
           <ul className="navbar-nav Header-ul ">
             <li className="nav-item">
               <Link to='/' className="Header-options">Home</Link>
             </li>
             <li className="nav-item">
               <Link to='/' className="Header-options">Contacto</Link>
             </li>
             <li className="nav-item dropdown">
               <a className="Header-options dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Pedales
               </a>
               <ul className="dropdown-menu subMenuOptions" aria-labelledby="navbarDropdownMenuLink">
                 <li><Link to='/category/od-ds' className='Links'>OD/DS</Link></li>
                 <li><Link to='/category/modulation'  className='Links'>Modulaciones</Link></li>
                 <li><Link to='/category/delay'  className='Links'>Delays</Link></li>
               </ul>
             </li>
                  <div className="Header-user">
                    <li className="nav-item">
                      <a className="Header-options">Registrarse</a>
                    </li>
                    <li className="nav-item">
                      <a className="Header-options">Iniciar sesión</a>
                    </li>
                  </div>
           </ul>
         </div>
           <Link to='/cart'><CartWidget /></Link>
       </div>
     </nav>
   
  );
}

export default NavBar;