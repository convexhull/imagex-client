import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import LoginInfo from './LoginInfo/LoginInfo';


class MainNavbar extends Component {

    render(){
        return (
          <div className={classes["main-navigation"]}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">ImageX</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Navbar.Text>
                    <Link to="/unsplash" className={classes["custom-links"]}>Unsplash</Link>
                  </Navbar.Text>
                  <Navbar.Text>
                    <Link to="/pixabay" className={classes["custom-links"]}>Pixabay</Link>
                  </Navbar.Text>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <LoginInfo />
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}


export default MainNavbar;