import './ItemCart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'


const Cart = () => {

    const [loading] = useState(false)

    const { cart, removeItem, getTotal } = useContext(CartContext)


    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(cart.length === 0) {

        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <div className="">
            <div className="productos-carrito">
                <h1>Carrito</h1> 
                {cart.map(prod => <li key={prod.id}><strong>Nombre:</strong> {prod.nombre} <strong>Cantidad :</strong>  {prod.quantity}  <strong>Precio C/U :</strong>  {prod.precio}   <strong>SubTotal:</strong>  {prod.quantity * prod.precio} <button onClick={() => removeItem(prod.id)} className = 'button-carrito'>X</button></li>)}  Total : {getTotal()}
                <button> <Link to='/order' className='generarOrden' > Finalizar compra </Link></button> 
            </div>
        </div>
        </>
    )
}

export default Cart