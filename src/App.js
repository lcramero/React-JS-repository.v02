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
} from "react-router-dom";
import {CartProvider} from "./components/context/CartContext"
import CartScreen from "./components/cartScreen/CartScreen";

//Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {

  return (

    <>
      <CartProvider>
        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path ="/products" element={<ItemListContainer/>}/>
              <Route path="/products/:category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/about-us"/>
              <Route path="/cart" element={<CartScreen/>}/>
            </Routes>
            <Footer/>
          </Router>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
