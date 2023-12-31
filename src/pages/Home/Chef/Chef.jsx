import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Chef = () => {
  const [chefs, setChefs] = useState([]);
  
  useEffect(() => {
    fetch('https://flavor-riot-server-waseyrahman19-gmailcom.vercel.app/chef')
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
                <Link to={`/ChefRecipes/${chef.id}`}>
              <Button variant="primary">View Recipes Button</Button>
              </Link>
                
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Chef;