import { Link } from "react-router-dom";
 const Checkout = () => {

    return(
        <>
            <Link to='/cart'><button className="btnCheck">Checkout</button></Link>
        </>
    );
}
export default Checkout;