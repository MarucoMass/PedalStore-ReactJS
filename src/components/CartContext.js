import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let findProduct = cartList.find(elem => elem.idItem === item.id);
        console.log(findProduct)
        if (findProduct === undefined) {
            setCartList([
               ...cartList,
               {
                   idItem: item.id,
                   imgItem: item.img,
                   titleItem: item.title,
                   priceItem: item.price,
                   qtyItem: qty
               }
           ]);        
        } else {
            findProduct.qtyItem += qty;
        }
    }

    const deleteItem = (item) => {
        let newList = cartList.filter(elem => elem.idItem != item);
        setCartList(newList);
    }

    const deleteAll = () => {
        setCartList([]);
    }

    // const deleteAmount = (item) => {
    //     const findProduct = cartList.find(elem => elem.id === item.id)
    //     console.log(findProduct.qtyItem)
    //     if (findProduct){
    //         findProduct.qtyItem--
    //     } if (findProduct.qtyItem === 0){
    //         findProduct.qtyItem = 1
    //     };
    // }
    return(
        <CartContext.Provider value={{cartList, addItem, deleteItem, deleteAll}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;