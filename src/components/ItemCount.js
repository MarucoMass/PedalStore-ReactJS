import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        if (count < 5) {
            setCount(count+1);
        } 
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count-1);
        } 
    }

    return(
        <>
        <div className="ItemCountBox">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button>Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;