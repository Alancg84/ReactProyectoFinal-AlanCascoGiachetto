import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to= '/' className = "Button btn btn-primary">Volver a productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <div className='btnCartContainer'>
                <div className='btnCartContainer1'>
                <button onClick={() => clearCart()} className="Button btn btn-primary">Limpiar carrito</button>
                <Link to='/' className="Button btn btn-primary">Volver a productos</Link>
                </div>
                <div>
                <Link to='/checkout' className='Button btn btn-primary'>Checkout</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Cart