import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const {itemId} = useParams()
    
    useEffect (() => {
        getProductById (itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId] )

    return(
        <div className='ItemDetailContainer' >
            <h1>ItemDetailContainer que muestra la pantalla una vez que entras al producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer