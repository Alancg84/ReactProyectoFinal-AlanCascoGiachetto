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
                <Link to= '/' className = 'Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <div className='btnCartContainer'>
                <button onClick={() => clearCart()} className="Button btn btn-primary">Limpiar carrito</button>
                <Link to="/" className="Button btn btn-primary">Volver a productos</Link>
            </div>
            <Link to='/checkout' className='Option'></Link>
        </div>
    )
}

export default Cart

/* 
ASI ES ItemDetailContainer!!!!

import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const {itemId} = useParams()
    
    useEffect (() => {
        getProductById (itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId] )

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
*/