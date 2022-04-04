import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'

const App = () => {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Bienvendio a Trazos'/>
        <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
    </div>

  );
}

export default App;
