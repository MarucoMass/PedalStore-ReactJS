// import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getData } from '../data';
import { useEffect, useState } from 'react';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
        .then(function(products) {
            console.log(products)

            setProducts(products);
        });
    }, []);
    
    function onAddItem(itemCount){
        alert(itemCount);
    }
    
    return(
        <>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
            <ItemCount stock={5} initial={1} onAdd={onAddItem}/>
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