import React from 'react'


const CartItem = ({id, name, img, price, stock, category}, props) => {
    console.log(props)
  return (
    <div>
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
            </section>
        </article>
    </div>
  )
}

export default CartItem