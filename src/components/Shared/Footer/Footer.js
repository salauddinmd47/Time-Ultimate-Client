import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container  className="  mt-3 text-start text-light  p-3"> 
      <Row lg={3} sm={1} xs={1} className=""> 
        <Col className="border-end" >
          <h4 >Our Stores</h4>
          <li>
            <NavLink to="/">New York</NavLink>
          </li>
          <li>
            <NavLink to="/"> London</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Paris</NavLink>
          </li>
          <li>
            <NavLink to="/teacher">Sidney</NavLink>
          </li>
          <li>
            <NavLink to="/teacher">Mumbai</NavLink>
          </li>
        </Col>
        <Col className="border-end" >
          <h4>Contact us</h4>
          <h2>Time Ultimate</h2>
          <li>+1-0987659087</li>
          <li>E-mail:timiultimate@gmail.com</li>
          <li>390/B New York-7434</li>
        </Col>
        
        <Col className="border-end">
          <h4 >Useful Links</h4>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms and Condition</NavLink>
          </li>
          <li>
            <NavLink to="/">Support</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </Col> 
      </Row>
      <div className="text-center">
        <hr />
          <p>
            <small>Copyright © 2021. All rights reserved.</small>
          </p>
        </div>
    </Container>
  );
};

export default Footer;
