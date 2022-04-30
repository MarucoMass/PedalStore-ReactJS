import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let findProduct = cartList.find(elem => elem.idItem === item.id);
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
            setCartList([
                ...cartList
            ]);
        }
    }

    const deleteItem = (item) => {
        let newList = cartList.filter(elem => elem.idItem !== item);
        setCartList(newList);
    }

    const deleteAll = () => {
        setCartList([]);
    }

    const calcItem = (priceItem, qtyItem) => {
        
        return priceItem * qtyItem;
    }

    const calcSubTotal = () => {
       
        let arrayOfPrices = cartList.map(elem => calcItem(elem.priceItem, elem.qtyItem))
        let sumaTotal = arrayOfPrices.reduce((a, b) => a + b, 0)
        return sumaTotal;
    }

    const calcTax = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcTax(); 
    }

    const calcNumberWidget = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={
            {   
                cartList, 
                addItem, 
                deleteItem, 
                deleteAll, 
                calcItem, 
                calcSubTotal, 
                calcTax, 
                calcTotal, 
                calcNumberWidget,
            }       
                                    }>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;