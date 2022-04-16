import CartWidget from './CartWidget';
import Logo from '../img/pedal-svgrepo-com.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    // <header className='App-header'>
    //     <div className='App-header-contenedor'>
    //           <div className='App-header-title'>
    //             <a href='#'>
    //             <span>Pedal</span>
    //              Sh<img src={Logo} alt='logo' className='App-header-logo'></img>p
    //             </a>
    //           </div>

    //           <ul className='App-header-lista'>
    //             <li><a className='active' href='#'>Home</a></li>
    //             <li><a href='#'>Quienes somos</a></li>
    //             <li className='BoxSubmenu'><a href='#'>Pedales</a>
    //               <ul className="App-header-submenu" aria-labelledby="navbarDropdownMenuLink">
    //                 <li><a href="#">Distorsiones</a></li>
    //                 <li><a href="#">Modulaciones</a></li>
    //                 <li><a href="#">Delays</a></li>
    //                 <li><a href="#">Reverbs</a></li>
    //                 <li><a href="#">EQs</a></li>
    //                 <li><a href="#">Compresores</a></li>
    //                 <li><a href="#">Multiefectos</a></li>
    //                 </ul>
    //             </li>
    //             <li><a href='#'>Contacto</a></li>
    //               </ul>
    //     </div>
    //         <div className='navBurguer'><div className='burguer'></div></div>
    //         <CartWidget />
    // </header> 
    // <>
     
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
               <Link to='/' className="Header-options" >Quiénes somos</Link>
               {/* <a className="Header-options" href="#">Quiénes somos</a> */}
             </li>
             <li className="nav-item">
               <Link to='/' className="Header-options">Contacto</Link>
               {/* <a className="Header-options" href="#">Contacto</a> */}
             </li>
             <li className="nav-item dropdown">
               <a className="Header-options dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Pedales
               </a>
               <ul className="dropdown-menu subMenuOptions" aria-labelledby="navbarDropdownMenuLink">
                 <li><Link to='/category/1' className='Links'>Distorsiones</Link></li>
                 <li><Link to='/category/2'  className='Links'>Modulaciones</Link></li>
                 <li><Link to='/category/3'  className='Links'>Delays</Link></li>
               </ul>
             </li>
                  <div className="Header-user">
                    <li className="nav-item">
                      <a className="Header-options" href="#">Registrarse</a>
                    </li>
                    <li className="nav-item">
                      <a className="Header-options" href="#">Iniciar sesión</a>
                    </li>
                  </div>
           </ul>
         </div>
           <CartWidget />
       </div>
     </nav>
    // </>
  );
}

export default NavBar;