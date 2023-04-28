import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

//Estilos
import "../cartScreen/CartScreen.css"
import { Button } from 'react-bootstrap'


    const CartScreen = () => {

        const {calcTotal, removeItem, cart} = useContext(CartContext)

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
                        <hr/>
                        <stronge>Precio total U$D{calcTotal()}</stronge>
                    </>
                }
            </div>
    )
}

export default CartScreen