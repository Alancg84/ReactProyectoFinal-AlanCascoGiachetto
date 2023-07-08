import React, {useContext, useState} from "react";
import { CartContext } from '../../context/CartContext';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig';
import './Checkout.css'

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const handleConfirm = (userData) => {
        const order = {
            buyer: userData,
            products: cart,
            total: total
        }
        console.log(order)

        const pedidosRef = collection(db, "orders");

        if(userData && cart && total) {
            console.log('userData:', userData);
            console.log('cart:', cart);
            console.log('total:', total); //Estoy probando si algun o de los datos viajan vacios//


        addDoc(pedidosRef, order)
        .then((doc) => {
            setOrderId(doc.id);
            console.log(doc.id); // pruebo si me llega la ID de pedido//
            clearCart()
        })
        .catch((error) =>{
            console.error('Error adding document: ', error)
        })

        }else{
        console.log('error: missing data')
        }

        
    }

    if (orderId) {
        return(
            <div className="container CardItem">
            <h1 className="main-title">Muchas gracias por tu compra!</h1>
            <p>Tu numero de pedido es: {orderId}</p>
            </div>
        )

    }

    return (
        <div className="Container">
            <h1>FINALIZAR COMPRA</h1>
            <CheckoutForm onConfirm={handleConfirm} />
        </div>
    )
}

export default Checkout