import './ItemList.css'
import Item from '../Item/Item.js'


const ItemList = ({products }) => {
    return(
        <div className='ListGroupDad'>
            <div className="ListGroup">
                {products.map(prod => <Item className='' key={prod.id} {...prod} />)}
            </div>
        </div>
    )
}

export default ItemList