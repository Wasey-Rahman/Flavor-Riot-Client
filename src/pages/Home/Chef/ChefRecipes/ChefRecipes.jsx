import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row, Toast } from 'react-bootstrap';
import Navigation from '../../../../Shared/Navigation/Navigation';
import Footer from '../../../../Shared/Footer/Footer';
import { Outlet, useParams } from 'react-router-dom';

const ChefRecipes = () => {
  const {id} =useParams();
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState(new Set());
    
    
  
  useEffect(() => {
    fetch('https://flavor-riot-server-waseyrahman19-gmailcom.vercel.app/chef')
      .then(res => res.json())
      .then(data =>setRecipes(data))
      
      .catch(error => console.log(error))
  }, []);

  const handleFavorite = (name) => {
    setFavorites(new Set(favorites.add(name)));
  };




  
    return (
        <div>
        <Navigation></Navigation>
        
         {recipes.map(recipe => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <Container className="my-5">
      <Row>
        <Col xs={12} sm={12}>
          <Image src={recipe.picture}  />
        </Col>
        <Col xs={12} sm={8}>
          <h2>{recipe.name}</h2>
          <p>{recipe.bio}</p>
          <p>Likes: {recipe.likes}</p>
          <p>Number of Recipes: {recipe.recipes}</p>
          <p>Years of Experience: {recipe.experience}</p>
        </Col>
      </Row>
    </Container>
      <Container className="my-5">
        <h2 className='text-center text-secondary'>Recipes:</h2>
            <Row>
              <Col xs={12} sm={4}>
                
              </Col>
              <Col xs={12} sm={8}>
                <h2 className='text-primary'>{recipe.First_name}</h2>
                <p >Ingredients:{recipe.First_ingredients}</p>
                <p>Cooking Method: {recipe.First_cooking_method}</p>
                <p>Rating: {recipe.First_rating}/5</p>
                {/* <Button variant="primary">Add to Favorites</Button> */}
                <Button
                  variant="primary"
                  disabled={favorites.has(recipe.First_name)}
                  onClick={() => handleFavorite(recipe.First_name)}
                >
                  Add to Favorites
                </Button>
                <Toast
                  onClose={() => setFavorites(new Set(favorites.delete(recipe.First_name)))}
                  show={favorites.has(recipe.First_name)}
                  delay={3000}
                  autohide
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <Toast.Body>
                    {recipe.First_name} has been added to your favorites!
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                
              </Col>
              <Col xs={12} sm={8}>
                <h2 className='text-danger'>{recipe.Second_name}</h2>
               <p>Ingredients:{recipe.Second_ingredients}</p>
                <p>Cooking Method: {recipe.Second_cookingMethod}</p>
                <p>Rating: {recipe.Second_rating}/5</p>
                {/* <Button variant="primary">Add to Favorites</Button> */}
                <Button
                  variant="primary"
                  disabled={favorites.has(recipe.Second_name)}
                  onClick={() => handleFavorite(recipe.Second_name)}
                >
                  Add to Favorites
                </Button>
                <Toast
                  onClose={() => setFavorites(new Set(favorites.delete(recipe.Second_name)))}
                  show={favorites.has(recipe.Second_name)}
                  delay={3000}
                  autohide
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <Toast.Body>
                    {recipe.Second_name} has been added to your favorites!
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                
              </Col>
              <Col xs={12} sm={8}>
                <h2 className='text-success'>{recipe.Third_name}</h2>
                <p>Ingredients:{recipe.Third_ingredients}</p>
                <p>Cooking Method: {recipe.Third_cookingMethod}</p>
                <p>Rating: {recipe.Third_rating}/5</p>
                {/* <Button variant="primary">Add to Favorites</Button> */}
                <Button
                  variant="primary"
                  disabled={favorites.has(recipe.Third_name)}
                  onClick={() => handleFavorite(recipe.Third_name)}
                >
                  Add to Favorites
                </Button>
                <Toast
                  onClose={() => setFavorites(new Set(favorites.delete(recipe.Third_name)))}
                  show={favorites.has(recipe.Third_name)}
                  delay={3000}
                  autohide
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <Toast.Body>
                    {recipe.Third_name} has been added to your favorites!
                  </Toast.Body>
                </Toast>
                
              </Col>
            </Row>
          </Container>
        </div>
      ))};
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  
    );
         
    
             
             
    
};

export default ChefRecipes;