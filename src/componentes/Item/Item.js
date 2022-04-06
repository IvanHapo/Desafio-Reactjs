import './Item.css'

const Item = ({ nombre, img}) => {
    return(
        <div className='card-container'>
            <div className='imagen-container'>
                <img src={img} alt={nombre} />
            </div>

            <div className='card-content'>
                <h3 className='card-title'>{nombre}</h3>
            </div>
            <div className='btn'>
                <button>Ver más</button>
            </div>
        </div>
        
    )
}

export default Item