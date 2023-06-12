import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className='CardItem'>
            
            <picture>
                <img src={img} alt ={name} className="ItemImg card-img-top"/>
            </picture>
            <section className='section'>
                <p className='Info'>
                    <h3>{name}</h3>
                </p>
                        <p className='Info'>
                            Precio: $ {price}
                        </p>
                        <p className='Info'>
                            Stock: {stock} u.
                        </p>
            </section>
            <footer className='ItemFooter'>
                <div className='FooterItem'>
                <Link to={`/item/${id}`} className='Option btn btn-primary'>Ver Detalle</Link>
                </div>
            </footer>
        </article>
    )
}

export default Item