import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <img src={"./images/Logo-Trazos.png"} className="LogoNav" alt="" />
            </div>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Contacto</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar