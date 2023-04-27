import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
//Modulos
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
//Estilos
import "../itemDetail/ItemDetail.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ItemDetail = ({id, title, image, category, description, stock, price}) => {

  const navigate = useNavigate()
  const comeBack = () => {
    navigate (-1)
  }
  //Con este hook (useState) estamos manejando la propiedad "stock"
  //en ItemCount está expresado
  const [counter, setCounter] = useState(1);

  //Esta función se ha hecho para añadir los productos al carrito
  const {addToCart} = useContext(CartContext)

  const addOn = () => {
    const newItem = { 
      description, 
      price, 
      category, 
      image, 
      counter,
      id,
    }
    addToCart(newItem)
  }
  
  return (
    <>
    <Card id='item-detail-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='item-card'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title className="text-muted">U$D {price}</Card.Title>
          <ItemCount max={stock} modify={setCounter} amount={counter} />
          <Link>
              <Button variant="primary" onClick={addOn}>Add to cart</Button>
          </Link>
          <hr/>
          <Button onClick={comeBack}>volver a productos</Button>
      </Card.Body>
    </Card>
</>
  )
}


export  default ItemDetail
