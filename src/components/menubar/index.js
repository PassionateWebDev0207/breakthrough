import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { getProfile } from '../../service/auth';
import { authSignOut } from '../../redux/reducers/auth';

const Menubar = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="md">
      <Navbar.Brand as={Link} to="/app/dashboard">
        <img
          src="https://breakthroughos.com/wp-content/uploads/2020/09/Asset-1breakthroughos.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="BreakthroughOS"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/app/strategize">STRATEGY</Nav.Link>
          <Nav.Link as={Link} to="/app/identity">IDENTITY</Nav.Link>
          <Nav.Link as={Link} to="/app/collaborate">COLLABORATE</Nav.Link>
          <Nav.Link as={Link} to="/app/account">ACCOUNT</Nav.Link>
        </Nav>
        <Nav>
          {
            getProfile() && (
              <NavDropdown title={`Sign in as ${getProfile().name}`}>
                <NavDropdown.Item onClick={() => dispatch(authSignOut())}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
