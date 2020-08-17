import React from 'react';
import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import { Row, Col } from 'react-bootstrap';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const adminLogin = window.localStorage.getItem('adminLogin');
    if (adminLogin) {
      // alert('tem usuario');
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      if (username.value === 'admin') {
        if (password.value === 'password') {
          var loginAdmin = JSON.stringify({
            token: 'adminValid',
            username: username.value,
            passoword: password.value,
          });
          window.localStorage.setItem('adminLogin', loginAdmin);
          window.location.href = '/home';
        } else {
          alert('Senha inválida');
        }
      } else {
        alert('Usuario inválido');
      }
    }
  }

  return (
    <Row>
      <Col md="5" className="box-login">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Login</Button>
        </form>
      </Col>
    </Row>
  );
};

export default LoginForm;
