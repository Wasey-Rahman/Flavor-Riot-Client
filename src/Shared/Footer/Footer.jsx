import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div>
           
            <footer className="bg-info mt-5">
      <Container>
        <Row>
          <Col md={4} className="my-4">
            <h5>Subscribe to our newsletter</h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col md={4} className="my-4 ">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li >
                <a href="#" className='text-decoration-none text-light'>Browse Recipes</a>
              </li>
              <li>
                <a href="#"  className='text-decoration-none text-light'>Submit a Recipe</a>
              </li>
              <li>
                <a href="#"  className='text-decoration-none text-light'>Our Chefs</a>
              </li>
              <li>
                <a href="#"  className='text-decoration-none text-light'>Latest News</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="my-4">
            <h5>Contact Us</h5>
            <p>1234 Main St, Anytown USA</p>
            <p>Email: info@flavorriot.com</p>
            <p>Phone: 555-555-5555</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p>&copy; 2023 Flavor Riot. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"> <FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
   
        </div>
    );
};

export default Footer;