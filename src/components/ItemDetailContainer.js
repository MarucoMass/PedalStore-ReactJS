// import customFetch from '../util/customFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
// const {dataProducts} = require('../util/dataProducts');
// import { getProducts } from '../util/dataProducts.js';
import { fetchSingleFireBase } from '../util/firestoreFetch.js';


const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState({});
    const { idItem } = useParams();
    
    
    useEffect(() => {

        fetchSingleFireBase(idItem)
            .then(result => setProducts(result))
            .catch(error => console(error))
            
    }, [])

    // FORMA DE HACERLO QUE VIMOS EN CLASE
    // useEffect(() => {
    //     customFetch( dataProducts.find(el => el.id === parseInt(idItem)) )
    //     .then(result => setProducts(result))
    //     // .then(result => console.log(result))
    //     .catch(err => console.log(err))
    // }, [])

    
    // FORMA DE HACERLO CON THEN LLAMANDO EL PROMISE DIRECTAMENTE DESDE EL JS DE PRODUCTOS
    // useEffect(() => {
    //         getProducts() 
    //             .then(result => setProducts(result.find(el => el.id === parseInt(idItem))))
    //             .catch(err => console.log(err))

    //             // ESTO NO VA
    //         // .then(function(products) {
            
    //             //     setProducts(products);
    //             // });
            
    //         }, []);
            
        // FORMA DE HACERLO CON ASYNC AWAIT
        // useEffect(() => {
        //     async function getItem() {
        //         const productDescription = await getProducts([])
        //         setProducts(productDescription[0]);
        //         }  
        //     getItem();
        //     }, [])

    return(
        <div className='ItemDetailContainer-Box'>
            <ItemDetail item={products} key={products.id}/>
        </div>
        
    );
}

export default ItemDetailContainer;


