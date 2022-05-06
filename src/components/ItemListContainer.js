import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFireBase } from '../util/firestoreFetch';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

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
 
    return(
    
        <div className='ItemListContainer-Box Contenedor'>
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
