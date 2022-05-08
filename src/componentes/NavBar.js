import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { firestoreDb } from "../services/firebase/index";
import { getDocs, collection } from "firebase/firestore";


const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, "categories")).then((response) => {
        const categories = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
        });
        setCategories(categories);
    });
    }, []);



return (
    <nav className="NavBar">
        <ul className="componentes-NavBar">
            <NavLink to="/" >
                <img src={"./images/Logo-Trazos.png"} className="LogoNav" alt="" />
            </NavLink>
        <li id="elements-NavBar">
            <NavLink to="/">
                Inicio
            </NavLink>
        </li>
        <li id="elements-NavBar">
        <NavLink to="/category">
            Categorias
        </NavLink>
        <ul className="menu-vertical">
            {categories.map((categoria) => (
                <NavLink
                key={categoria.id}
                to={`/category/${categoria.id}`}>
                {categoria.description}
                </NavLink>
            ))}
        </ul>
        </li>
        <li>
            <CartWidget />
        </li>
        </ul>
    </nav>
    )
}


export default NavBar