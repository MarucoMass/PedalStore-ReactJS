import ItemListContainer from './ItemListContainer'
const Home = () => {
    return(
        <>
        <div className='Home Contenedor' data-testid = 'home'>
            <div className='HomeTitle'>
            <h1>Bienvenidos<br/> a PedalStore, <br/>la mejor tienda<br/> virtual de<br/> pedales de<br/> guitarra.</h1>
            </div>
            <div className='Home-paragraph'>
                <p>A continuación te mostraremos un listado con todos los productos en stock.<br/> Si deseas puedes buscar los pedales por categoría.</p>
            </div>
        </div>
            <ItemListContainer />
        </>
    );
}
export default Home;