import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

//Estilos
import "../cartScreen/CartScreen.css"
import { Button } from 'react-bootstrap'


    const CartScreen = () => {

        const {calcTotal, removeItem, cart} = useContext(CartContext)

        return (
            <div className='cartscreen'>
            {
                cart.map((product) =>(
                    <>
                        <h3>Resumen de compras</h3>
                        <div className='cartscreen-window'>
                            <p>{product.description}</p>
                            <p>U$D{product.price}</p>
                            <p>cantidad:{product.counter}</p>
                            <Button className='btn' onClick={() => removeItem(product.id)}>
                                Remove product
                            </Button>
                        </div>
                    </>
                ))
                
            }
            <hr/>
            <stronge>Precio total U$D{calcTotal()}</stronge>
            </div>
    )
}

export default CartScreen