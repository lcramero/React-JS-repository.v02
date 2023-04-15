//Componentes
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import Footer from "./components/footer/Footer";

//Modulos
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path ="/products" element={<ItemListContainer/>}/>
          <Route path="/products/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/about-us"/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
