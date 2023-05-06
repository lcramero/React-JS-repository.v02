import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Estilos
import "../cartScreen/CartScreen.css"



    const CartScreen = () => {

        const {calcTotal, removeItem, cart, clearCart} = useContext(CartContext)

        return (
            <div className='cartscreen'>
                {
                    cart.length === 0
                    ? <>
                        <h3>Carrito vacío</h3>
                        <Link to="/products" className="btn btn-primary"> Volver a comprar</Link>
                    </>
                    :<>
                        <h3>Resumen de compra</h3>
                        <hr/>
                        <div className='cartscreen-global'>
                            <div className='cartscreen-content'>
                            {
                                cart.map((product) =>(
                                    <>
                                        <Card className='cartscreen-card' style={{ width: '12rem' }}>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Text className='cartscreen-text-description'>{product.description}</Card.Text>
                                            <Card.Title className="text-muted">U$S{product.price}</Card.Title>
                                            <Card.Text className='cartscreen-text-counter'>{product.counter}</Card.Text>
                                            <Button className='btn' onClick={() => removeItem(product.id)}>
                                                Remove product
                                            </Button>
                                        </Card>
                                    </>
                                ))
                            }
                            </div>
                            <div className='cartscreen-buys'>
                            <stronge>Precio total U$D{calcTotal()}</stronge>
                            <hr/>
                            <Button onClick={clearCart} className='cartscreen-buys-items'>Vaciar carrito</Button>
                            <Link to="/checkout">
                                <Button>Terminar compra</Button>
                            </Link>
                            </div>
                        </div>
                    </>
                }
            </div>
    )
}

export default CartScreen