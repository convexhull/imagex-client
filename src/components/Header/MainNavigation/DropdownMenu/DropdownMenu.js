import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import classes from "./DropdownMenu.module.css";
import Backdrop from "../../../Common/UI/NewBackdrop/NewBackdrop";


class DropdownMenu extends Component {
  render() {

    let authenticationInfo = (
      <React.Fragment>
        <li className={classes["link"]}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className={classes["link"]}>
          <NavLink to="/signup">Join free</NavLink>
        </li>
      </React.Fragment>
  );

    if(this.props.isAuthenticated) {
      authenticationInfo = (
        <React.Fragment>
        <li className={classes["link"]}>
          <NavLink to="/favourite-images">My Favourites</NavLink>
        </li>
        <li className={classes["link"]}>
          <NavLink to="/profile/favourite-images">My Profile</NavLink>
        </li>
      </React.Fragment>
      );
    }


    return (
      <React.Fragment>
        <Backdrop opacity="transparent" hideBackdrop={this.props.toggleDropdownMenu} />
        <ul className={classes["responsive-topnav"]} onClick={this.props.toggleDropdownMenu} >
          <li className={classes["link"]}>
            <NavLink to="/unsplash">Unsplash</NavLink>
          </li>
          <li className={classes["link"]}>
            <NavLink to="/pixabay">Pixabay</NavLink>
          </li>
          <li className={classes["link"]}>
            <NavLink to="/computerVision">Search Image</NavLink>
          </li>
          <li onClick={this.props.randomImageLoad} className={classes["link"]}>
            <NavLink to="#">Random Image</NavLink>
          </li>
          {authenticationInfo}
        </ul>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(DropdownMenu);
