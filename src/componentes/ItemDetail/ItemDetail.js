import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock)
            setCount(count + 1)

    }

    const decrement = () => {
        if(count > initial)
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement} className = 'buttonCart'>-</button>
            <button onClick={increment} className = 'buttonCart'>+</button>
            <button onClick={() => onConfirm(count)} className = 'buttonCart'>Agregar al carrito</button>
        </div>
    )
}



const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => { 

    const {addItem, isInCart} = useContext(CartContext)

    const handleAdd = (count) => {

        const productObj = {
            id, nombre, precio,
        }

        addItem ({...productObj, quantity: count})
    }


    const Count = ButtonCount

    return (
        <div className="card-contenedor">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <div>
                <p>
                    Categoria: {category}
                </p>
                <p className="text-description">
                    Descripción: {descripcion}
                </p>
                <p >
                    Precio: {precio}
                </p>
            </div>           
            <footer>
                { isInCart(id) ? <Link className='goCart' to='/itemcart'> <strong>Ir al carrito</strong> </Link> : <Count onConfirm={handleAdd} stock={stock}/> } 
            </footer>
        </div>
    )
}

export default ItemDetail