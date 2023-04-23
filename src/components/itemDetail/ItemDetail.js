import React from 'react'
//Modulos
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
//Estilos
import "../itemDetail/ItemDetail.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ItemDetail = ({title, image, description, price}) => {
  return (
    <>
    <Card id='item-detail-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='item-card'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title className="text-muted">U$D {price}</Card.Title>
          <ItemCount/>
          <Link>
              <Button variant="primary">Add to cart</Button>
          </Link>
      </Card.Body>
    </Card>
</>
  )
}


export  default ItemDetail
