import Cart from './cart.svg';
const CartWidget = () => {
    return(
        <>
            <div className='CartWidget-Box'>
                <span>Log In</span>
                <span>Register</span>
            <div className='img-Box'>
                <img src={Cart} alt='cart' className='carrito'></img>
                <div className='number'>6</div>
            </div>
            </div>
      
        </>
      );
}

export default CartWidget;