import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
        setCategories(categories)
        })
    }, [])

    return(
        <nav className="NavBar" >
            <Link to='/'>
                <img src={"./images/Logo-Trazos.png"} className="LogoNav" alt="" />
            </Link>
            <div className='butonNav'>
            { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar