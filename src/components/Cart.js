import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

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
            <Link to='/'><button className='cartKeepShop'>Ir a comprar</button></Link>
          </>
        }  

        <div className='cartContent'>
          <div className='cartBoxContain'>

        {
          cart.cartList.length > 0 &&
            cart.cartList.map(item => 
              <div className="cartBox" key={item.idItem}>
                  <div className="cartImg">
                      <img src={item.imgItem} alt="Imágen del producto"></img>
                  </div>
                  
                  <div className="cartText">
                      <h2>{item.titleItem}</h2>
                      <p> $ {item.priceItem} x {item.qtyItem} item/s</p>
                      {/* <p>Total: $ {cart.calcItem(item.idItem)}</p> */}
                      <p>Total: $ {cart.calcItem(item.priceItem, item.qtyItem)}</p>
                      {/* <button onClick={() => test.deleteAmount(item.idItem)}>Eliminar un producto</button> */}
                      <button onClick={() => cart.deleteItem(item.idItem)}>Eliminar producto</button>
                  </div>
          
              </div>
                            )
          
        }
            </div>/
            {/* fin cartboxcontain */}
        {
          cart.cartList.length > 0 &&
          <div className='cartResume'>
            <h3>Detalle</h3>
              <p>Subtotal: $ {cart.calcSubTotal()}</p>
              <p>IVA 21%: + $ {cart.calcTax()}</p>
              <hr></hr>
              <p>Total: $ {cart.calcTotal()}</p>
              <button>Finalizar compra</button>
            </div>
        }
    
        </div>
        {/* fin cartcontent */}
    </div>
        // fin cartcontain
    );
}

export default Cart;