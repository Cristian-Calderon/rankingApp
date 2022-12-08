import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ProductCard = ({
  product,
  addToCompare,
  removeFromCompare,
  selected
}) => (

  <Card  style={{ width: '12rem' }} key={product.nombre}>
    <Image style={{height:'150px'}} src={product.logo} />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>{product.ranking}</Card.Text>
      <Card.Text>
        {selected && selected.includes(product) ? (
          <Button variant="danger" onClick={() => removeFromCompare(product)}>
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={() => addToCompare(product)}>
            Compare
          </Button>
        )}
      </Card.Text>
    </Card.Body>
  </Card>
 
);

export default ProductCard;
