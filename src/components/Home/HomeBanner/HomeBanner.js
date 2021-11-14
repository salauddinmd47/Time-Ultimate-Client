import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import './HomeBanner.css'
import bannerImg from '../../../images/watch2.png'
const HomeBanner = () => {
    
  return (
    <div>
      <div className='main-banner d-flex align-items-center'>
      <Container>
        <Row lg={2} sm={1} xs={1} >
          <Col>
            <div className='pt-3'>
                <h3 className="text-warning">NEW ARRIVALS</h3>
              <h1 className="banner-heading">Our Best</h1>
              <h1 className="banner-heading">Collection</h1>
              <h2 className="text-info">Upo 40% Off</h2>
              <Button variant="danger" className="px-5    ">EXPLORE</Button>
            </div>
          </Col>
          <Col>
          <img  className="img-fluid" src={bannerImg} alt="" />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
