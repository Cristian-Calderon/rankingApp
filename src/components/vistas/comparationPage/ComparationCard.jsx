import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ProductCard = ({
  product,
  addToCompare,
  removeFromCompare,
  selected
}) => (

  <Card class="shadow p-3 mb-5 bg-white rounded" style={{ width: '257px',margin: '15px'}}  key={product.nombre}>
    <Card.Body >
     <Card.Img  variant="top" style={{ height: '150px',borderRadius:'10px'}} src={product.logo} />
     <Card.Body className="bg-dark text-white"  style={{marginTop:'20px',borderRadius:'10px', padding:'10px'}} >
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text className="text-center">{product.ranking}</Card.Text>
      <Card.Body className="text-center">
        {selected && selected.includes(product) ? (
          <Button variant="danger" onClick={() => removeFromCompare(product)}>
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={() => addToCompare(product)}>
            Compare
          </Button>
        )}
        </Card.Body>
      </Card.Body>
    </Card.Body>
  </Card>
 
);

export default ProductCard;
