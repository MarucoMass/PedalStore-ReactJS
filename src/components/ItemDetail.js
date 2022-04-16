import Checkout from "./Checkout";
import ItemCount from "./ItemCount";
import { useState } from "react";
const ItemDetail = ( {item} ) => {

    const [itemCount, setItemCount] = useState(0);

    function onAddItem(ItemCount){
        alert(`Lleva ${ItemCount} ${item.title}`);
        setItemCount(ItemCount);
    }
      
    return(
        <>
        { item && item.img 
            ?   <div className="ItemDetail-contain">
                                <div className="ItemDetail-img"><img src={item.img} alt="Imágen del producto"></img></div>
                                <div className="ItemDetail-text">
                                    <h3>{item.title}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Stock: {item.stock}</p>
                                    <p>{item.description}</p>
                                    {/* <ItemCount stock={item.stock} initial={0} onAdd={onAddItem}/> */}
                                    {/* <Checkout /> */}
                                     {
                                        itemCount === 0
                                        ? <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                                        : <Checkout />
                                    }
                                </div>
                    </div>
            :           <div className='loadContain'>
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


