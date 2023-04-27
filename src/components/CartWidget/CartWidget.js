//Modulos
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
//Estilos - Librerias
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = (props) => {

    const {calcQuantity} = useContext (CartContext)


    return (
        <div className="div-cart">
            <div className="div-cart-icon">
                <FaShoppingCart />
            </div>
            <div className="div-cantidad">
                {calcQuantity()}
            </div>
        </div>
    )
}
export default CartWidget;