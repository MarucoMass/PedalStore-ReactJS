// import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getData } from '../data';
import { useEffect, useState } from 'react';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    // Forma de hacerlo con async await
    // useEffect(() => {
    //     async function fetchData() {
    //         let data = await getData();
    //         setProducts(data);
    //         }
    //     fetchData();
    //     }, []);

    // Forma de hacerlo con .then
    useEffect(() => {
        getData()
        .then(function(products) {

            setProducts(products);
        });
    }, []);
    

    
    return(
        <>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>}
        </>
    );
}

export default ItemListContainer;
