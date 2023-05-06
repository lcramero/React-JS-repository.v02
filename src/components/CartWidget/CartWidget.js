//Modulos
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

//Estilos
import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";
import { MDBBadge} from 'mdb-react-ui-kit';

const CartWidget = () => {

    const {calcQuantity} = useContext (CartContext)


    return (
        <>
        <MDBBadge color='danger' notification pill>
            {calcQuantity()}
        </MDBBadge>
        <div className="div-cart">
            <div className="div-cart-icon">
                <FaShoppingCart />
            </div>
            
        </div>
        </>
    )
}
export default CartWidget;