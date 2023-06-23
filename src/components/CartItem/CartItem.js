import React from 'react'
import './CartItem.css'
import '../ItemCount/ItemCount'
import { useContext, useState } from 'react'

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
        </div>
    )
}


export default CartItem