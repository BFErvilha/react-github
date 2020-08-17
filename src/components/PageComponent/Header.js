import React from 'react';
import { UserContext } from '../../UserContext';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const context = React.useContext(UserContext);
  const adminLogin = window.localStorage.getItem('adminLogin');

  function handleClick() {
    window.localStorage.removeItem('adminLogin');
    window.location.href = '/';
  }

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">GitSearch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {adminLogin && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title={context.user} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleClick}>Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
