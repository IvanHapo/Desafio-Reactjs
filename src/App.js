import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <Route path='/' element={<h1>HOME</h1>} />
            <Route path='/list' element={<ItemListContainer />} />
            <Route path='/detail' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>} /> */}
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
