import React from 'react';
import Apetizer from './Apetizer.jpg';
import Chicken from './Chiken.jpg';
import Rice from './Rice.jpg';
import Vegetable from './Vegetable.jpg';
import Dal from './Dal.jpg';
import Kabab from './Kabab.jpg';
import Dessert from './dessert.jpg';


import { Col, Image, Row } from 'react-bootstrap';

const Home = () => {
    
    return (
        <section>
            <section>
            <h2 className='mt-5 text-center text-primary'>Recipe Categories</h2>
            <Row className='mt-5'>
                <Col xs={6} md={3}>
                    <Image src={Apetizer} roundedCircle style={{height:'200px',width:'200px'}} />
                    <h4 className="mt-2 text-center">Appetizer</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Chicken} roundedCircle style={{height:'200px',width:'200px'}}/>
                    <h4 className="mt-2 text-center">Chicken</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Rice} roundedCircle style={{height:'200px',width:'200px'}}/>
                    <h4 className="mt-2 text-center">Rice</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Vegetable} roundedCircle style={{height:'200px',width:'200px'}} />
                    <h4 className="mt-2 text-center">Vegetable</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Dal} roundedCircle style={{height:'200px',width:'200px'}} />
                    <h4 className="mt-2 text-center">Dal</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Kabab} roundedCircle style={{height:'200px',width:'200px'}} />
                    <h4 className="mt-2 text-center">Kabab</h4>
                </Col>
                <Col xs={6} md={3}>
                    <Image src={Dessert} roundedCircle style={{height:'200px',width:'200px'}} />
                    <h4 className="mt-2 text-center">Dessert</h4>
                </Col>
                
              
            </Row>
            </section>
            
        </section>
        
        
        
        

    );
};
export default Home;