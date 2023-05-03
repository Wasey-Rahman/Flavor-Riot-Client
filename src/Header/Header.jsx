import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Dosa from './Dosa.jpg';
import Biriyani from './Biriyani-2.jpg';
import Curry from './Curry.jpg';
import Samosa from './Samosa.jpg';
 
const Header = () => {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
    return (
        <section>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Dosa}
          alt="First slide"
          style={{ height: '700px', width: '200px' }}
        />
        <Carousel.Caption>
          <h3 className='text-primary'>Dosa</h3>
          <p className='text-danger'>Cripsy to Taste.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Biriyani}
          alt="Second slide"
          style={{ height: '700px', width: '200px' }}
        />

        <Carousel.Caption>
          <h3 className='text-light'>Biriyani</h3>
          <p>Aromatic and Delicious.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Samosa}
          alt="Third slide"
          style={{ height: '700px', width: '200px' }}
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Samosa</h3>
          <p>
            Yummy savory filling.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Curry}
          alt="fourth slide"
          style={{ height: '700px', width: '200px' }}
        />

        <Carousel.Caption>
          <h3>Curry</h3>
          <p>
            Spicy Scrumptious.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default Header;