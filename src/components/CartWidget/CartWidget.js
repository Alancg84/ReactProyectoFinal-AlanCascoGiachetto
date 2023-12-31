import cart from "./assets/icons8-soccer-icongeek26-outline-96.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'>
            <img className="CartImg" src={cart} alt="cart-widget"/>0
            {totalQuantity}
        </Link>
    )

}

export default CartWidget