import React from 'react'
import './CartItem.css'

const CartItem = ({id, name, img, price, stock}) => {
    
    return (
        <div className='CartItemContainer'>
            <article className='CardItem'>            
                <picture>
                    <img src={img} alt ={name} className="img-fluid rounded-start"/>
                </picture>
                <section className='section'>
                    <p className='Info'>
                        <h3>{name}</h3>
                    </p>
                    <p className='Info'>
                        Precio: $ {price}
                    </p>
                </section>            
            </article>
        </div>
    )
}


export default CartItem