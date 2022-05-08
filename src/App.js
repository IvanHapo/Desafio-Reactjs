import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemCart from './componentes/ItemCart/ItemCart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Form from './componentes/Form/Form';


const App = () => {

  return (
    <div className="App">

      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/itemcart' element={<ItemCart />} />
            <Route path="/order" element={<Form/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>

  );
}

export default App;
