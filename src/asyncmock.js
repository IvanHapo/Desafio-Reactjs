const productos = [
    {
        id :1,
        nombre : 'Carpetas de Color',
        descripcion : 'Carpetas de color economicas para guardar papeles',
        precio : 200,
        img : 'https://www.distribuidoraorfei.com.ar/fotito/250/250/XY/grafica/productos/070000/071457-01-01.jpg',
        stock: 5
    },
    {
        id :2,
        nombre : 'Lapices de Colores',
        descripcion : '',
        precio : 100,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgiZeIZZMuN8fr1NVFhyoRCZwPY0JfF9yTw&usqp=CAU',
        stock: 9
    },
    {
        id :3,
        nombre : 'Mochila Nike',
        descripcion : '',
        precio : 2000,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0PbpJhM-PUpjn-BD3FTewiPcpJgIz8fMnw&usqp=CAU',
        stock: 3
    },
    {
        id :4,
        nombre : 'Carpeta',
        descripcion : '',
        precio : 100,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rOzxw4PnqtUJQKnvELtasESUUic0XIwXRA&usqp=CAU',
        stock: 9
    },
    {
        id :5,
        nombre : 'Borrador',
        descripcion : '',
        precio : 20,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3WdeWk-FedeW8a43sKXcEtqh4XeTR5q7eg&usqp=CAU',
        stock: 8
    },
    {
        id :6,
        nombre : 'Biromes',
        descripcion : '',
        precio : 50,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pmfYZnMfyz8vXa2IQF1NWlkbrc2Ic5Rh2Q&usqp=CAU',
        stock: 9
    },
    {
        id :7,
        nombre : 'Separadores',
        descripcion : '',
        precio : 100,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iezH82c34WbwbfAdRZQkIUhZLS5c6W8xJg&usqp=CAU',
        stock: 10
    },
    {
        id :8,
        nombre : 'Carpeta Anillada',
        descripcion : '',
        precio : 200,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dCfpLgHAqe5r7-S01ouF2QRrOkjQEXUm0J81VR6uFPSD40WX2sxaf15B1uPkiSFBgtw&usqp=CAU',
        stock: 7
    },
    
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}



export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}
