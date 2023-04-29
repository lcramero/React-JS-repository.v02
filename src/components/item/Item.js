import React from 'react'

//Estilos
import "../item/Item.css"

//Modulos
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

    const Item = ({id, name, description, price, image}) => {
        return (
            <>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" className='item-card-img' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title className="text-muted">U$D {price}</Card.Title>
                    <Link className='item-card-link' to ={`/detail/${id}`}>
                        <Button variant="primary">See more details</Button>
                    </Link>
                </Card.Body>
            </Card>
            </>
    )
}
export default Item


