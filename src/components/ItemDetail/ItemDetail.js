import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Stock Disponible: {stock}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail
