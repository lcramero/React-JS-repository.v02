//Componentes
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"


//Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
