import React from 'react'; 
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {name, img, price, description, _id} = product;
    return (
        <Col>
      <Card className="bg-dark shadow ">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-white">
          <Card.Title >{name}</Card.Title>
          <Card.Text>
            {description.slice(0,100)}
          </Card.Text>
          <div className='d-flex justify-content-between'>
              <h4 className="text-info">${price}</h4>
              <Link to={`products/${_id}`}>
              <Button variant="danger">BUY NOW</Button>
              </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ProductCard;