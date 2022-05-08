import './Form.css'
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { firestoreDb} from '../../services/firebase/index'
import { collection, addDoc, getDocs, where, query,documentId, writeBatch } from "firebase/firestore"
import {  NavLink } from 'react-router-dom'


const buyerForm= {
    name:"",
    telephone:"",
    email: "",
}


const Form = () => {
    
    const { cart, clearCart ,getTotal } = useContext(CartContext)

    const [buyer, setBuyer] = useState(buyerForm)
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)


    const getForm = (e) => {
        const { name, value } = e.target;
        setBuyer({...buyer, [name]: value})
    }


    const orderConfirmed = () => {
        setBuyer(buyerForm);
        clearCart()
        setOrderStatus('confirmado')
    }


    const createOrder = async  () => {
    setOrderStatus('procesando')    
    const order = {
        ItemsOrder: cart.map(p=> {return ({id: p.id, nombre: p.nombre, precio: p.precio, quantity: p.quantity })}),
        form: buyer,
        total: getTotal(),
        date: new Date()
    }
    const collectionRefOrder = collection(firestoreDb, 'orders')
        setOrderId(( await addDoc(collectionRefOrder, order)).id)
        orderConfirmed(orderId)

}

const outStock = () =>{
    const ids = cart.map(p => p.id)
    const batch = writeBatch(firestoreDb);
    const collectionRefStock = collection(firestoreDb, 'products');

    getDocs(query(collectionRefStock, where(documentId(), 'in', ids)))
        .then(response =>{
            response.docs.forEach(doc=>{
                const dataDoc = doc.data()
                const prodQuantity = cart.find(p=> p.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    batch.commit()
                }
            })
        }).catch(err =>{
            console.log(err)
        })

}
const orderAndStock = () =>{
    createOrder();
    outStock();
}

if(orderStatus === 'confirmado') {
    return(
        <>
        <div className = 'orderFinal'>
            <h1>Gracias por tu compra.</h1>
            <p>Tu numero de orden es: <strong> {orderId} </strong>.</p>
            <h3>Guarde su numero de orden para retirar su producto.</h3>
        <div>
            <button><NavLink className="goHome" to='/' >Volver al Inicio</NavLink>  </button>
        </div>
        </div>
        </>
    )
}else if(orderStatus === 'procesando'){
    return(
        <>
        <div>
            <h1>Estamos procesando tu orden.</h1>
        </div>
        </>
    )
}

    return(
        <>
        <div className="formGeneral">
            <h2>Formulario de Compra</h2>
            <form className="">
                <label>Nombre:</label>
                    <input  type="text"
                            name="name"
                            value={buyer.name}
                            onChange={getForm}
                            className="form__input" 
                            placeholder="Escribí tu nombre" 
                            />
                <label>Telefono:</label>
                    <input type="text"
                            name="telephone"
                            value={buyer.telephone}
                            onChange={getForm}
                            className="form__input" 
                            placeholder="Escribí tu telefono" />
                <label>Email: </label>
                    <input type="text"
                            name="email"
                            value={buyer.email}
                            onChange={getForm}
                            className="form__input" 
                            placeholder="Escribí tu email" />
                <button onClick={() => orderAndStock()} className="formButon"> Enviar </button>
            </form>
        </div>
        </>
    )
}
export default Form