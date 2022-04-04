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
            <div className="ItemCountBtns">
                <button className="ItemCountBtns-decrement" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="ItemCountBtns-increment" onClick={increment}>+</button>
            </div>
            <button className="ItemCount-Add" onClick={addToCart}>Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;