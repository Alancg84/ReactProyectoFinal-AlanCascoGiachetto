import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name: name || '',
            phone: phone || '',
            email: email || ''
        }

        onConfirm(userData)
    }

    return(
        <div className='Container CardItem'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input className='Input' type='text' value = {name} onChange={({ target }) => setName(target.value)}/>
                    <input className='Input' type='text' value = {phone} onChange={({ target }) => setPhone(target.value)}/>
                    <input className='Input' type='text' value = {email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <div className='Label'>
                    <button type='submit' className='Button btn btn-primary'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm