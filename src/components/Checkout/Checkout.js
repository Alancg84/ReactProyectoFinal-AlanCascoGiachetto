import React, {useContext, useState} from "react";
import { CartContext } from '../../context/CartContext';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig';

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const handleConfirm = (userData) => {
        const order = {
            buyer: userData,
            products: cart,
            total: total(),
        }
        console.log(order)

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, order)
        .then((doc) => {
            setOrderId(doc.id);
            clearCart()
        })
        .catch((error) =>{
            console.error('Error adding document: ', error)
        })
    }

    return (
        <div className="Container">
            <h1>FINALIZAR COMPRA</h1>
            <CheckoutForm onConfirm={handleConfirm} />
        </div>
    )
}

export default Checkout