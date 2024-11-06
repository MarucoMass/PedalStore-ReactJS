/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchFireBase } from '../util/firestoreFetch';
 import customFetch from '../util/customFetch';
 import dataProducts from '../util/dataProducts';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
       if (idCategory === undefined) {
        customFetch( dataProducts )
          .then(result => setProducts(result))
          .catch(err => console.log(err))  
      } else {
         customFetch( dataProducts.filter(el => el.categoryId === parseInt(idCategory)) )
          .then(result => setProducts(result))
          .catch(err => console.log(err))  
      }
    }, [idCategory]);

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

