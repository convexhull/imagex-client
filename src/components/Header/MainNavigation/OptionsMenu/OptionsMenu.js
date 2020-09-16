import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./OptionsMenu.module.css";
import Backdrop from "../../../Common/UI/Backdrop/Backdrop";

class OptionsMenu extends Component {
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

    return (
      <React.Fragment>
        <Backdrop
          opacity="transparent"
          hideBackdrop={this.props.toggleOptionsMenu}
        />
        <ul
          className={classes["responsive-topnav"]}
          onClick={this.props.toggleOptionsMenu}
        >
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
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(OptionsMenu);
