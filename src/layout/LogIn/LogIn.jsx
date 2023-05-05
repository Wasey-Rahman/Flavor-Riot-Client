import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import { FaGoogle,FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {
  const {signIn}=useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      });
  };
    

    return (
        <div>
            <Navigation></Navigation>
            <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="mt-3 mb-3">Or sign in with:
      
      <Button className='ml-2' variant="outline-primary"><FaGoogle/>Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub/>Login with Github</Button>

      </div>
      
      <div className="mt-3">
        Don't have an account? <Link to="/register">Register</Link> here.
      </div>
      <Footer></Footer>
        </div>
    );
};

export default LogIn;