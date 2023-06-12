import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial);

    const increment = () => {

        if(quantity < stock) {
            setQuantity (quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity-1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button btn btn-primary' onClick = {decrement}>-</button>
                <h4 className='Number btn btn-primary'>{quantity}</h4>
                <button className='Button btn btn-primary' onClick = {increment}>+</button>
            </div>
            <div className='AddToChartButton'>
                <button className='Button btn btn-primary' onClick={() => onAdd(quantity)}disabled = {!stock}>
                    Add to Chart
                </button>
            </div>
        </div>
    )
}

export default ItemCount