import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../Home/ProductCard/ProductCard';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('https://lit-ravine-71907.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div className='text-center text-white mt-5'>
            <h4>COLLECTIONS</h4>
            <h2>EXPLORE OUR WORLD OF COLLECTION</h2>
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

export default Explore;