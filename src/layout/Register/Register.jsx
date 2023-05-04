import React, { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  // const { createUser }=useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    // const form =event.target;
    // const name =form.name.value;
    // const photo =form.photo.value;
    // const email =form.email.value;
    // const password =form.password.value;
    // console.log(name,photo,email,password)
    // createUser(email,password)
    // .then(result=>{
    //   const createdUser=result.user;
    //   console.log(createdUser);
    // })
    // .catch(error=>{
    //   console.log(error);
    // })


    if (email === "" || password === "") {
      setError("Please fill in all required fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Submit registration form
    // ...
  };

  return (
<div>
    <Navigation></Navigation>
    <div className="container mt-5">
        <h2>Registration</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text>
          Already have an account?<Link to="/login">LogIn</Link>
        </Form.Text>
      </Form>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Register;