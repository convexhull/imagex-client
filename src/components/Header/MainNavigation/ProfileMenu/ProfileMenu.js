import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import classes from "./ProfileMenu.module.css";
import Backdrop from "../../../Common/UI/Backdrop/Backdrop";
import * as actions from '../../../../store/actions/index';


class ProfileMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop opacity="transparent" hideBackdrop={this.props.toggleProfileMenu} />
        <ul className={classes["responsive-topnav"]} onClick={this.props.toggleProfileMenu} >
          <li className={classes["link"]}>
            <NavLink to="/profile/favourite-images">My Profile</NavLink>
          </li>
          <li className={classes["link"]}>
            <NavLink to="/account">Account Settings</NavLink>
          </li>
          <li className={classes["link"]}>
            <NavLink to="/favourite-images">Favourites</NavLink>
          </li>
          <li className={classes["link"]} onClick={this.props.onUserLogout}>
            <NavLink to="#">Logout</NavLink>
          </li>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogout: () => dispatch(actions.userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
