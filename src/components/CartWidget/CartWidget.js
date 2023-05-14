//Modulos
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

//React-bootstrap módulos
import { FaShoppingCart } from "react-icons/fa";

//MDBootstrap módulos
import { MDBBadge} from 'mdb-react-ui-kit';

//Estilos
import "./CartWidget.css"

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