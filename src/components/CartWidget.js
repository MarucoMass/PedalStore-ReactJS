import Cart from './img/cart.svg';
const CartWidget = () => {
    return(
        <>
            <div className='CartWidget-Box'>
                <span>Register</span>
                <span>Sign In</span>
            <div className='img-Box'>
                <img src={Cart} alt='cart' className='carrito' width={25} height={25}></img>
                <div className='number'>7</div>
            </div>
            </div>
      
        </>
      );
}

export default CartWidget;