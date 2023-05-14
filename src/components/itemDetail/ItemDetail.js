//Modulos
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

//Boostrap-react módulos
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//Estilos
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  stock,
  price,
}) => {
  const navigate = useNavigate();
  const comeBack = () => {
    navigate(-1);
  };
  const [counter, setCounter] = useState(1);

  const { addToCart } = useContext(CartContext);

  const addOn = () => {
    const newItem = {
      description,
      price,
      category,
      image,
      counter,
      id,
      name,
    };
    addToCart(newItem);
  };

  return (
    <>
      <Card id="item-detail-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="item-card">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title className="text-muted">U$D {price}</Card.Title>
          <ItemCount max={stock} modify={setCounter} amount={counter} />
          <Link>
            <Button variant="primary" onClick={addOn}>
              Add to cart
            </Button>
          </Link>
          <hr />
          <Button onClick={comeBack}>Back to {category} category</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
