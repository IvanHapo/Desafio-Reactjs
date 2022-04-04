import './ItemCount.css'
import { useState } from "react";


const Counter = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > initial)
        setCount(count - 1)
    }

    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }

    console.log(setCount)

    return(
        <div className='fullCart'>
            <h3>Carrito de Compras</h3>
            <div className="cardCount">
                <button onClick={decrement}>-</button>
                <p>{count} </p>
                <button onClick={increment}>+</button>
            </div>
            <div className="cardCount2">
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>

    )
}

export default Counter