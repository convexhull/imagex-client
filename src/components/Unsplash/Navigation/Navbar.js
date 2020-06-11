import React, { Component } from 'react';
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
        <div>
          <ul>
            <li>Current Events</li>
            <li>COVID-19</li>
            <li>Nature</li>
            <li>wallpaper</li>
            <li>Railways</li>
          </ul>
        </div>
    );
  }
}

export default withRouter(NavigationBar);