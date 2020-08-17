import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Container } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="bg-login">
      <Container>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Login;
