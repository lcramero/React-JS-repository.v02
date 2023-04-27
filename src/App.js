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
import {CartContext} from "./components/context/CartContext"
import { useState } from "react";
import CartScreen from "./components/cartScreen/CartScreen";

//Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  //Con este hook y la funcion addToCart agrego productos al carrito, utilizando la herramienta context
  const [cart, setCart] = useState([])
  const addToCart = (item => {
    setCart([...cart, item])
  })

  const calcQuantity = () => {
    return cart.reduce((acc, product) => acc + product.counter, 0)
  }

  const calcTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.counter, 0)
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter((product) => product.id !== itemId)
    setCart(newCart)
  }
  return (
    <>
    //Todas las constantes que vamos a utilizar en las otras partes de la app hay que exportarlas a través del contexto
    <CartContext.Provider value={{addToCart, calcQuantity, calcTotal, removeItem, cart}}>
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
    </CartContext.Provider>
    </>
  );
}

export default App;
