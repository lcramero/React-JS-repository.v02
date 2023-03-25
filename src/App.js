import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola, mundo!</h1>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
