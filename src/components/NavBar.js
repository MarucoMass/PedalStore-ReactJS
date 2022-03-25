import CartWidget from './CartWidget';
import Logo from './pedal-svgrepo-com.svg';
const NavBar = () => {
  return (
      <>
      <header className='App-header'>
          <div className='App-header-contenedor'>
                <div className='App-header-title'>
                  <a href='#'>
                  <span>Pedal</span>
                   Sh<img src={Logo} alt='logo' className='App-header-logo'></img>p
                  </a>
                </div>
              <div>
                <ul className='App-header-lista'>
                  <li><a className='active' href='#'>Home</a></li>
                  <li><a href='#'>Quienes somos</a></li>
                  <li className='BoxSubmenu'><a href='#'>Pedales</a>
                    <ul className="App-header-submenu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a href="#">Distorsiones</a></li>
                      <li><a href="#">Modulaciones</a></li>
                      <li><a href="#">Delays</a></li>
                      <li><a href="#">Reverbs</a></li>
                      <li><a href="#">EQs</a></li>
                      <li><a href="#">Compresores</a></li>
                      <li><a href="#">Multiefectos</a></li>
                      </ul>
                  </li>
                  <li><a href='#'>Contacto</a></li>
                    </ul>
              </div>
          </div>
              <CartWidget />
      </header> 
      </>
  // <nav className="navbar navbar-expand-lg App-header">
  //   <div className="container-fluid">
  //     <a className="navbar-brand App-header-title" href="#">Pedal<span>Store</span></a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
  //       <ul className="navbar-nav App-header-lista">
  //         <li className="nav-item">
  //           <a className="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Quiénes somos</a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //            Pedales
  //           </a>
  //           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  //             <li><a className="dropdown-item listaPedales" href="#">Distorsiones</a></li>
  //             <li><a className="dropdown-item listaPedales" href="#">Modulaciones</a></li>
  //             <li><a className="dropdown-item listaPedales" href="#">Delays</a></li>
  //             <li><a className="dropdown-item listaPedales" href="#">Reverbs</a></li>
  //             <li><a className="dropdown-item listaPedales" href="#">EQs</a></li>
  //             <li><a className="dropdown-item listaPedales" href="#">Compresores</a></li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  );
}

export default NavBar;