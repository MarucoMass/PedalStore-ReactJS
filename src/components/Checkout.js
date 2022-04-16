import { Link } from "react-router-dom";
 const Checkout = () => {
    // const [itemCount, setItemCount] = useState(0);
    return(
        <>
            <Link to='/cart'><button className="btnCheck">Checkout</button></Link>
        </>
    );
}
export default Checkout;