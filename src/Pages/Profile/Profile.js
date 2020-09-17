import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";


import classes from "./Profile.module.css";
import FavouriteImages from "../FavouriteImages/FavouriteImages";
import * as actions from '../../store/actions/index';


class Profile extends Component {

  componentDidMount() {
    this.props.onLoadAccountInfo();
    if(!this.props.isAuthenticated) {
      this.props.history.replace('/login');
    }
  }

  render() {
    return (
      <div className={classes["Profile"]}>
        <div className={classes["profile-info"]}>
          <div className={classes["profile-info__profile-pic"]}>
            <img
              src={
                this.props.userProfileInfo &&
                this.props.userProfileInfo.profilePicUrl
              }
              alt="user's dp"
            />
          </div>
          <div className={classes["profile-info__name-bio"]}>
            <h1 className={classes["profile-info__name"]}>
              {this.props.userProfileInfo &&
                this.props.userProfileInfo.firstName +
                  " " +
                  this.props.userProfileInfo.lastName}
            </h1>
            <h3 className={classes["profile-info__username"]}>@{this.props.userProfileInfo && this.props.userProfileInfo.userName}</h3>
            <h3 className={classes["profile-info__bio"]}>{this.props.userProfileInfo && this.props.userProfileInfo.bio}</h3>
          </div>
          <div className={classes["profile-info__edit-profile"]}>
            <Link to="/account">Edit Profile</Link>
          </div>
        </div>
        <Route
          exact
          path="/profile/favourite-images"
          component={FavouriteImages}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.account.userProfileInfo,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadAccountInfo: () => dispatch(actions.asyncUserFetchAccountStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
