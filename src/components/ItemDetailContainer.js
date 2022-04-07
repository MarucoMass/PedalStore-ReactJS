import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
const {dataProducts} = require('../util/dataProducts');
// import { getProducts } from '../util/dataProducts.js';

// FORMA DE HACERLO QUE VIMOS EN CLASE
let validation = true;
const getItem = ( data ) => {
    return new Promise((resolve, reject) => {
        if (validation) {
            setTimeout(() => {
            resolve(data);
            }, 2000);
        } else {
            reject('Hubo un error');
        }
    })
}
const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});


    useEffect(() => {
        getItem( dataProducts[0] )
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, [])

    
    // FORMA DE HACERLO CON THEN
    // useEffect(() => {
        //     getProducts()
        //         .then(result => setProducts(result))
        //         .catch(err => console.log(err))
        
        //     // .then(function(products) {
            
            //     //     setProducts(products[0]);
            //     // });
            
            // }, []);
            
        // FORMA DE HACERLO CON ASYNC AWAIT
        // useEffect(() => {
        //     async function getItem() {
        //         const productDescription = await getProducts([])
        //         setProducts(productDescription[0]);
        //         }  
        //     getItem();
        //     }, [])

    return(
        <>
            <ItemDetail item={products} />
        </>
    );
}

export default ItemDetailContainer;


