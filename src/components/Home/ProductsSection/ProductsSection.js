import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('https://lit-ravine-71907.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setProducts(data.slice(0,6)))
    },[])
    return (
        <div>
            <div className="text-center text-white my-5" >
                <h4> WATCHES</h4>
                <h2>OUR EXCLUSIVE COLLECTION </h2>
            </div>
            <Container>
                <Row lg={3} xs={1} className="g-4">
                    {
                        products.map(product=> <ProductCard 
                            key={product._id}
                            product={product}

                        ></ProductCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ProductsSection;