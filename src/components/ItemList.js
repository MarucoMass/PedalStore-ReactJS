import Item from './Item';

export default function ItemList({ products }){
    return(

        <div className='ItemList-Box'>
            {
                // products.length > 0 ?
                // products.map(
                //     function(producto){
                //         return (
                //             <Item key={producto.id} item={producto} />
                //             );
                //         })
                products.map(el => <Item key={el.id} id={el.id} img={el.img} title={el.title} price={el.price}/>)
                // : <p>Cargando productos...</p>
                }
        </div>
    );
};