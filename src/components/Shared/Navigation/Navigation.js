import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Navigation.css'
const Navigation = () => {
  const {user, logOut} = useAuth()
  return (
    <div>
      <Navbar className="navbar" bg="dark" expand="lg">
        <Container >
          <Navbar.Brand className="text-light" href="#">TIME ULTIMATE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="text-white   me-3 text-decoration-none" to="/">Home</NavLink>
              <NavLink className="text-white   me-3 text-decoration-none" to="/explore">Explore</NavLink>
              {
                user.email&&  <NavLink className="text-white   me-3 text-decoration-none" to="/dashboard">Dashboard</NavLink>
              }
              {
                !user.email?<NavLink className="text-white   me-3 text-decoration-none" to="/login">Login</NavLink>:<button  className='border-0 bg-danger' onClick={logOut}>Logout</button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
