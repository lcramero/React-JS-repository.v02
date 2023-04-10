//Componentes
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemCount from "./components/itemCount/ItemCount";
import ComponenteRandom from "./components/componenteRandom/ComponenteRandom"
import Footer from "./components/footer/Footer";

//Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting ="Bienvenido a GEMINI's DUDE" />
      <ItemCount />
      <ComponenteRandom />
      <Footer />
    </div>
  );
}

export default App;
