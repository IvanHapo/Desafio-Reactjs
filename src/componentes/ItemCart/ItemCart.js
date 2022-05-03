import './ItemCart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from 'react-router-dom'
import FinishOrder from '../FinishOrder/FinishOrder'


const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, removeItem, getTotal } = useContext(CartContext)

    const createOrder = () => {

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Ivan Haponiuk',
                phone: '123456789',
                email: 'ivan0109@gmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = [] 

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

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
        <FinishOrder/>
        <div className="">
            <div className='title'>
                <h1>Carrito</h1>  
            </div>
            <div className="productos-carrito">
                {cart.map(prod => <li key={prod.id}>{prod.name} {prod.img}  <strong>Cantidad :</strong>  {prod.quantity}  <strong>Precio C/U :</strong>  {prod.precio}   <strong>SubTotal:</strong>  {prod.quantity * prod.precio} <button onClick={() => removeItem(prod.id)} className = 'button-carrito'>X</button></li>)}  Total : {getTotal()}
                <button onClick={() => createOrder()} className='generarOrden'>Generar Orden</button> 
                <button> <Link to='/order' className='generarOrden' > Finalizar compra </Link></button> 
            </div>
        </div>
        </>
    )
}

export default Cart