import React, { useContext, useState } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveRoute from '../../ActiveRoute/ActiveRoute';

const Navigation = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
  }
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Flavor-Riot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3">
            <ActiveRoute to="/" exact activeClassName="active" >Home</ActiveRoute>
            <ActiveRoute to="/blog" activeClassName="active">Blog</ActiveRoute>
            {
              user && <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
            }
            {user?
              <Button onClick={handleLogOut}  variant="secondary">LogOut</Button>:
              <Link to="/login">
                <Button variant="secondary">LogIn</Button>
              </Link>

              }
          </Nav>
        </Navbar.Collapse>
        
       
      </Container>
    </Navbar>
    );
};

export default Navigation;