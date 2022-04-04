// import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getData } from '../data';
import { useEffect, useState } from 'react';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     getData()
    //     .then(function(products) {
    //         console.log(products)

    //         setProducts(products);
    //     });
    // }, []);
    

    useEffect(() => {
        //Obtenemos los productos con una promesa
        async function fetchData() {
            let data = await getData();
            setProducts(data);
            }
        fetchData();
        }, []);

    return(
        <>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>}
        </>
    );
}

export default ItemListContainer;
// const [ pedales, setPedales ] = useState([]);

// useEffect(() => {
//     async function datosPedales() {
//         const pedirPedales = await getData();
//         setPedales(pedirPedales) 
//     }
//         // setTimeout(() => {
//             datosPedales()
//         // }, 2000);

//     }, [])