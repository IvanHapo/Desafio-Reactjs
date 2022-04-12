import './ItemDetail.css'

const ItemDetail = ({ nombre, img, descripcion, precio,categoria }) => {
    return (
        <article className="">
            <header className="">
                <h2 className="">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className=""/>
            </picture>
            <section>
                <p className="">
                    Categoria: {categoria}
                </p>
                <p className="">
                    Descripción: {descripcion}
                </p>
                <p className="">
                    Precio: {precio}
                </p>
            </section>           
            <footer className=''>
            </footer>
        </article>
    )
}

export default ItemDetail