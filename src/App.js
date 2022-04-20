// import logo from './logo.svg';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CartContextProvider from './components/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart  from './components/Cart';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <CartContextProvider> 
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  // </CartContextProvider>   

  );
}

export default App;
