import { useState } from "react";

function ItemCount ({stock, initial, onAdd})  {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count+1);
        } 
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count-1);
        } 
    }

    function addToCart(){
        onAdd(count)
    }

    return(
        <>
        <div className="ItemCountBox">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;