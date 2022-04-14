import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ id, nombre, img, precio}) => {
    return(
        <div className='card-container'>
            <div className='imagen-container'>
                <img src={img} alt={nombre} />
            </div>

            <div className='card-content'>
                <h3 className='card-title'>{nombre}</h3>
            </div>
            <div>
                <p className=''>
                    Precio: ${precio}
                </p>
            </div>
            <footer className='btn'>
                <Link to={`/detail/${id}`} className='btnDetalle'>Ver detalle</Link>
            </footer>
        </div>
        
    )
}

export default Item
