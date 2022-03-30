import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Bienvendio a Trazos'/>
    </div>

  );
}

export default App;
