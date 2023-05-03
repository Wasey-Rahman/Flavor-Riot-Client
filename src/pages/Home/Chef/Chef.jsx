import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/chef')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.log(error))
  }, []);
  
  return (
    <div>
      <h2 className='mt-5 text-center text-primary'>Chefs</h2>
      <div className="row">
        {chefs.map(chef => (
          <div className="col-md-4 mb-3" key={chef.id}>
            <Card className='mt-5'>
              <Card.Img variant="top" src={chef.picture} />
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                Years of experience:{chef.experience}<br></br>
                Numbers of recipes:{chef.recipes}<br></br>
                Likes:{chef.likes}
                </Card.Text>
                <Button variant="primary">View Recipes Button</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;