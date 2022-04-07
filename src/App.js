// import logo from './logo.svg';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    // <div className="App">
    <>
    <NavBar />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer />
    </>
  // </div>
  );
}

export default App;
