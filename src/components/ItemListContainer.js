import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
// import { getProducts } from '../util/dataProducts.js';
const {dataProducts} = require('../util/dataProducts');


let validation = true;
const getAllProducts = ( data ) => {
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
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts( dataProducts )
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, [])

    // Forma de hacerlo con async await
    // useEffect(() => {
    //     async function fetchData() {
    //         let data = await getProducts();
    //         setProducts(data);
    //         }
    //     fetchData();
    //     }, []);

    // Forma de hacerlo con .then
    // useEffect(() => {
    //     getData()
    //     .then(function(products) {

    //         setProducts(products);
    //     });
    // }, []);
    

    
    return(
        <>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>}
        </>
    );
}

export default ItemListContainer;
