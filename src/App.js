//Componentes
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer";
import { CheckOut } from "./components/Checkout/CheckOut";
import CartScreen from "./components/CartScreen/CartScreen";
//Modulos
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {CartProvider} from "./components/Context/CartContext"


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
              <Route path ="/" element={<ItemListContainer/>}/>
              <Route path ="/products" element={<ItemListContainer/>}/>
              <Route path="/products/:category/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/about-us"/>
              <Route path="/cart" element={<CartScreen/>}/>
              <Route path="/checkout" element={<CheckOut/>}/>
            </Routes>
            <Footer/>
          </Router>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
