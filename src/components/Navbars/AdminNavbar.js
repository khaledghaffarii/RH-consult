import React from 'react'
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import routes from "routes.js";
const AdminNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/admin/dashboard">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <NavDropdown
              title="Logout"
              id="basic-nav-dropdown"
              className="mr-5"
            >
              
              <NavDropdown.Item href="#action/3.4">
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AdminNavbar
