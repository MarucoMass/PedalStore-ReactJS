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
        // FORMA QUE HICE YO
        return priceItem * qtyItem;

        // FORMA DEL PROFE (en el param iria idItem)
        // let index = cartList.map(elem => elem.idItem).indexOf(idItem);
        // return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        // FORMA QUE HICE YO
        let arrayOfPrices = cartList.map(elem => calcItem(elem.priceItem, elem.qtyItem))
        let sumaTotal = arrayOfPrices.reduce((a, b) => a + b, 0)
        return sumaTotal;

        // OTRA FORMA QUE HICE YO
        // let newArray = cartList.map(elem => elem);
        // let arrayOfPrices = [];
        // for (const item of newArray) {
        //     let total = item.priceItem * item.qtyItem;
        //     arrayOfPrices.push(total);
        // }
        // let sumaTotal = arrayOfPrices.reduce((a, b) => a + b, 0)
        // return sumaTotal;
        
        
        // FORMA DEL PROFE
        // let totalPerItem = cartList.map(item => calcItem(item.idItem));
        // return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
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

    // const deleteAmount = (item, qty) => {
    //     const findProduct = cartList.find(elem => elem.id === item.id)

    //     if (findProduct){
    //         findProduct.qtyItem--
    //         // calcSubTotal();
    //         // calcImpuesto();
    //         // calcTotal();
    //     } if (findProduct.qtyItem === 0){
    //         findProduct.qtyItem = 1
    //     };
    // }

    return(
        <CartContext.Provider value={
            {   cartList, 
                addItem, 
                deleteItem, 
                deleteAll, 
                calcItem, 
                calcSubTotal, 
                calcTax, 
                calcTotal, 
                calcNumberWidget,
                // deleteAmount
            }       
                                    }>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;