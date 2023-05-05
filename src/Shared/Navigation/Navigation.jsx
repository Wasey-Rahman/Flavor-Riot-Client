import React, { useContext, useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import Ellipse from './Ellipse 1(1).png';

const Navigation = () => {
  const {user}=useContext(AuthContext);
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');
 

  // const handleLogin = () => {
  //   // Simulate a login action
  //   setIsLoggedIn(true);
  //   setUsername('John Doe');
  // };

  // const handleLogout = () => {
  //   // Simulate a logout action
  //   setIsLoggedIn(false);
  //   setUsername('');
  // };
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>
        <Navbar.Brand href="/">Flavor-Riot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavLink>{user.displayName}</NavLink>
          <Link to={`/login`}>
          <Button  variant="dark">LogIn</Button>
          </Link>
          
            
            
        
        {/* <Nav>
          {isLoggedIn ? (
            <NavDropdown
              title={
                <>
                  <img
                    src={Ellipse}
                    alt="User profile"
                    style={{ height: '30px', marginRight: '10px' }}
                  />
                  {username}
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        
        ) : (
            <Button onClick={handleLogin} variant="dark">LogIn</Button>
            
          )}
        </Nav> */}
      
       
      </Container>
    </Navbar>
    );
};

export default Navigation;