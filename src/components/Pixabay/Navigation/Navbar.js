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
      null
    );
  }
}

export default withRouter(NavigationBar);