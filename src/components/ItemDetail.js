import ItemCount from "./ItemCount";
const ItemDetail = ( {item} ) => {

    function onAddItem(ItemCount){
        alert(`Lleva ${ItemCount} ${item.title}`);
    }
      
    return(
        <>
        { item && item.img ?
                <div key={item.id} className="ItemDetail-contain">
                            <div className="ItemDetail-img"><img src={item.img} alt="imágen del producto"></img></div>
                            <div className="ItemDetail-text">
                                <h3>{item.title}</h3>
                                <p>Precio: ${item.price}</p>
                                <p>Stock: {item.stock}</p>
                                <p>{item.description}</p>
                                <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                            </div>
                </div>
                            : <div className='loadContain'>
                            <p>Cargando producto...</p>    
                            <div className='loadBox'>
                                <div className='loadCharge'></div>
                            </div>
                        </div>
            }
        </>
    );
}

export default ItemDetail;


