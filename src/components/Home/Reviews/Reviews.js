import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] =  useState([])
    useEffect(()=>{
        fetch('https://lit-ravine-71907.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div style={{ width:'95%' }} className="mx-auto">
            <div className="text-center text-white my-3">
                <h4>REVIEWS</h4>
                <h2>WHAT OUR CUSTOMER SAYS</h2>
            </div>
            <Container fluid>
                <Row lg={2} xs={1} sm={1}  className="g-4">
                    {
                        reviews.map(review=> <Review 
                        review={review}
                        key={review._id}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;