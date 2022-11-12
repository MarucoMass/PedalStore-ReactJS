import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CartContextProvider from './context/CartContext';
import Home from './pages/Home';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart  from './pages/Cart';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => {
  return (
  
    <CartContextProvider> 
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />  
      </BrowserRouter>
    </CartContextProvider>    

  );
}

export default App;
