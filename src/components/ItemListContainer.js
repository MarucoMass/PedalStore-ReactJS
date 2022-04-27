import React from 'react';
// import customFetch from '../util/customFetch';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getProducts } from '../util/dataProducts.js';
// const {dataProducts} = require('../util/dataProducts');
import { fetchFireBase } from '../util/firestoreFetch';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    // FORMA DE HACERLO COMO VIMOS EN CLASE
    useEffect(() => {
        
        fetchFireBase(idCategory)
        .then(result => setProducts(result))
        .catch(error => console.log(error))
       
    }, [idCategory])

    useEffect(() => {
        return (() => {
            setProducts([]);
        })
    }, []);

    // useEffect(() => {
    //     if (idCategory === undefined) {
    //          customFetch( dataProducts )
    //         .then(result => setProducts(result))
    //         .catch(err => console.log(err))  
    //     } else {
    //          customFetch( dataProducts.filter(el => el.categoryId === parseInt(idCategory)) )
    //         .then(result => setProducts(result))
    //         .catch(err => console.log(err))  
    //     }
    // }, [idCategory])

    // FORMA DE HACERLO CON ASYNC AWAIT
    // useEffect(() => {
    //     async function fetchData() {
    //         let data = await getProducts();
    //         setProducts(data);
    //         }
    //     fetchData();
    //     }, []);

    // FORMA DE HACERLO CON THEN LLAMANDO EL PROMISE DIRECTAMENTE DESDE EL JS DE PRODUCTOS
    // useEffect(() => {
    //     getProducts()
    //     if (idCategory === undefined) {
    //         getProducts()
    //             .then(result => setProducts(result))
    //             .catch(err => console.log(err))  
    //     } else {
    //         getProducts()
    //             .then(result => setProducts(result.filter(el => el.categoryId === parseInt(idCategory))))
    //             .catch(err => console.log(err))  
    //             }
    //         // ESTO NO VA
    //     // .then(function(products) {

    //     //     setProducts(products);
    //     // });
    // }, [idCategory]);
    

    
    return(
        <div className='ItemListContainer-Box'>
        {/* <ItemList products={products} /> */}
            { products.length > 0 
                ? <ItemList products={products} /> 
                : <div className='loadContain'>
                    <p>Cargando productos...</p>    
                    <div className='loadBox'>
                        <div className='loadCharge'></div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ItemListContainer;
