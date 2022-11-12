import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { fetchSingleFireBase } from '../util/firestoreFetch.js';
// import customFetch from '../util/customFetch.js';
// import dataProducts from '../util/dataProducts.js';

const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState({});
    const { idItem } = useParams();
    
    
    useEffect(() => {
        // traigo la información del producto
        fetchSingleFireBase(idItem)
            .then(result => setProducts(result))
            .catch(error => console(error))
            
    }, [])

    return(
        <div className='ItemDetailContainer-Box'>
            <ItemDetail item={products} key={products.id}/>
        </div>
        
    );
}

export default ItemDetailContainer;


