import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, Container, Label } from './Pages.styled';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  
  return (
    <Box>
    <Container>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </Label>
        <br />
        <Label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </Label>
        <br />
        <Label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </Label>
        <br />
        <Button type="submit">Register</Button>
      </form>
    </Container>
    </Box>
  );
};

export default Register;
