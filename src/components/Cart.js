import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
// import ItemCount from './ItemCount';

const Cart = () => {
    const cart = useContext(CartContext);

    return(
    <div className="cartContain">
        <div className="cartTitle"><h1>Mi carrito</h1></div>

        {cart.cartList.length > 0
        ? <div className='cartBtns'> 
            <Link to='/'><button className='cartKeepShop'>Seguir comprando</button></Link>
            <button className='cartDeleteAll' onClick={cart.deleteAll}>Borrar todos los productos</button>
          </div>
        : <>
            <p>No hay productos</p>
            <Link to='/'><button className='cartKeepShop'>Seguir comprando</button></Link>
          </>
        }  
      
        {cart.cartList.length > 0 &&
          cart.cartList.map(item => 
            <div className="cartBox" key={item.idItem}>
                <div className="cartImg">
                    <img src={item.imgItem} alt="Imágen del producto"></img>
                </div>
                
                <div className="cartText">
                    <h2>{item.titleItem}</h2>
                    <p> $ {item.priceItem} / {item.qtyItem} items</p>
                    {/* <p>Cantidad: {item.qtyItem}</p> */}
                    <p>Subtotal: $ {item.priceItem * item.qtyItem}</p>
                    {/* <button onClick={() => test.deleteAmount(item.idItem)}>Eliminar un producto</button> */}
                    <button onClick={() => cart.deleteItem(item.idItem)}>Eliminar producto</button>
                </div>
        
            </div>
                            )
        // :   <div className="cartTitle"><p>Agrega algún producto</p></div>
        }
    
    </div>
        
    );
}

export default Cart;