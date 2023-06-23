import React from 'react'
import './CartItem.css'


const CartItem = ({ id, name, img, price, stock, category }, props) => {
    console.log(props);
  return (
    <div className='container'>
        <article className='CardItem card mb-2'>
            <div class="row g-0">
            <picture class="col-md-4">
                <img src={img} alt ={name} className="ItemImg img-fluid rounded-start"/>
            </picture>
            <section className='col-md-8'>
            <div class="Card-body">
                <p className='Info'>
                    <h3>{name}</h3>
                </p>
                <p className='Info'>
                Precio: $ {price}
                </p>   
                </div>                         
            </section>
            </div>
        </article>
    </div>
  )
}

export default CartItem