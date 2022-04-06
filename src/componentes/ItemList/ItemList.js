import Item from '../Item/Item'
import '../Item/Item.css'

const ItemList = ({productos}) => {

    return(
        <div className='card-body'>
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList