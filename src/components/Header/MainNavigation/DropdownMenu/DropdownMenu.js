import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./DropdownMenu.module.css";
import Backdrop from "../../../Common/UI/Backdrop/Backdrop";

class DropdownMenu extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Backdrop show={true} /> */}
        <ul className={classes["responsive-topnav"]}>
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

export default DropdownMenu;
