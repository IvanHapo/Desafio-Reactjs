import './ItemCart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {

        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <div className="">
            <div className='title'>
                <h1>Carrito</h1>  
            </div>
            <div className="productos-carrito">
                {cart.map(prod => <li key={prod.id}>{prod.name} {prod.img}  <strong>Cantidad :</strong>  {prod.quantity}  <strong>Precio C/U :</strong>  {prod.precio}   <strong>SubTotal:</strong>  {prod.quantity * prod.precio} <button onClick={() => removeItem(prod.id)} className = 'button-carrito'>X</button></li>)}   
            </div>
            <div> 
            </div>
        </div>
        </>
    )
}

export default Cart