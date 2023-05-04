import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image
            src="https://photodune.img.customer.envatousercontent.com/files/394742855/Error+404+pal+color.jpg?w=900&fit=max&mark=https%3A%2F%2Fassets.shopfront.envato-static.com%2Fimages%2Fwatermarks-19012018.png&markalign=top%2Cleft&markpad=0&markfit=crop&fm=pjpg&q=40&s=35294a9e4689f03a6fb602ea03e4972f" fluid
          />
        </Col>
        <Col md={6}>
          
          <h3>Page Not Found</h3>
          <p>The page you requested could not be found.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;