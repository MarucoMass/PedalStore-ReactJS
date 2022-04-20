import Checkout from "./Checkout";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
const ItemDetail = ( {item} ) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    function onAddItem(qty){
        // alert(`Lleva ${qty} ${item.title}`);
        setItemCount(qty);
        test.addItem(item, qty);
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


