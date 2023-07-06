import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, name, img, categoria, description, price, stock}) => {    
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd= (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, img, categoria, description, price, stock
        };

        addItem (item, quantity)
    }

    return(
        <article className='CardItem'>
            <picture>
                <img src={img} className='ItemImg' alt ={name}/>
            </picture>
            <header className='Header'>
                <h3 className='ItemHeader'>{name}</h3>
            </header>
            <section>
                <p className='Info'>
                    Categoría: {categoria}
                </p>
                <p className='Info'>
                    Stock Disponible: {stock}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option' > Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }

            </footer>
        </article>
    )
}

export default ItemDetail
