import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [productos, setProducts] = useState ([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    
    }, [categoryId])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer