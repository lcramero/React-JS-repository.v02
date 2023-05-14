//Módulos
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

//Bootstrap modulos
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

//Estilos
import "./CartScreen.css"



    const CartScreen = () => {

        const {calcTotal, removeItem, cart, clearCart} = useContext(CartContext)

        return (
            <div className='cartscreen'>
                {
                    cart.length === 0
                    ? <>
                        <h3>Cart empty</h3>
                        <Link to="/products" className="btn btn-primary">Back to shopping</Link>
                    </>
                    :<>
                        <h3>Purchasing summary report</h3>
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
                            <stronge>total U$S {calcTotal()}</stronge>
                            <hr/>
                            <Button onClick={clearCart} className='cartscreen-buys-items'>Clear cart</Button>
                            <Link to="/checkout">
                                <Button>Finish shopping</Button>
                            </Link>
                            </div>
                        </div>
                    </>
                }
            </div>
    )
}

export default CartScreen