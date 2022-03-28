import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <ul>
            <li><img src={"./logo-trazos.png"} className="LogoNav" alt="" /></li>
            <li><button>Inicio</button></li>
            <li><button>Productos</button></li>
            <li><button>Historia</button></li>
            <li><button>Contacto</button></li>
            </ul>
        </nav>
    )
}

export default NavBar