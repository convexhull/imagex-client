import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import classes from './Navbar.module.css';





class NavigationBar extends Component {

  state = {
    searchKeyword : ''
  }

  handleChange = (event) => {
    this.setState({
      searchKeyword: event.target.value
    })
  };


  searchButtonHandler = () => {
    if(this.props.isAuthenticated){
      this.props.onSearchByKeyword(this.state.searchKeyword)
    }
    else {
      this.props.history.replace('/authentication');
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">Unsplash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className={classes.linkless} to="/authentication">
                Shit
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button
              variant="outline-success"
              onClick={this.searchButtonHandler}
            >
              {this.props.isAuthenticated ? "Search" : "Please login to search"}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavigationBar);