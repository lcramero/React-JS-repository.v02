import React from 'react'
//Estilos - Librerias
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = (props) => {
    return (
        <div className="div-cart">
            <div className="div-cart-icon">
                <FaShoppingCart />
            </div>
            <div className="div-cantidad">
                {props.cantidad}
            </div>
        </div>
    )
}
export default CartWidget;