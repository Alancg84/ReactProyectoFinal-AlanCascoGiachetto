import React from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext';


const CartItem = ({ id, name, img, price, stock, category }, props) => {
    console.log(props);
  return (
    <div className='container'>
        <article className='CardItem card mb-2 CartCardItem'>
            <div class="row g-0">
            <picture class="col-md-2 CartImgCard">
                <img src={img} alt ={name} className="CartItemImg"/>
            </picture>
            <section className='col-md-8 CartCardBody'>
            <div class="Card-body">
                <p className='Info'>
                    <h3>{name}</h3>
                </p>
                <p className='Info'>
                Precio: $ {price}
                </p>
                <p className='Info'>
                Cantidad: $ {quantity}
                </p>      
                </div>                         
            </section>
            </div>
        </article>
    </div>
  )
}

export default CartItem