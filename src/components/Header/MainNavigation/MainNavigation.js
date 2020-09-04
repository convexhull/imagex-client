import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';




import classes from './MainNavigation.module.css';
import logo from '../../../assets/images/logo.png';
import SearchBar from './SearchBar/SearchBar';


class MainNavbar extends Component {

  render() {
    
    let authenticationInfo = (
      <ul className={classes["authenticate"]}>
        <li>
          <NavLink to="/login" className={classes["navbar-links"]}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={classes["navbar-links"]}>Join free</NavLink>
        </li>
      </ul>
    );

    if(this.props.isAuthenticated){
      authenticationInfo = (
        <div className={classes["authenticate"]}>
          <div className={classes["authenticate__my-list"]}>
            <NavLink to="/favourite-images"><ion-icon name="heart" style={{color: '#6f1200'}}></ion-icon></NavLink>
          </div>
          <div className={classes["authenticate__profile-menu"]}>
            <NavLink to="/profile/favourite-images">
              <img src={this.props.userProfileInfo && this.props.userProfileInfo.profilePicUrl} alt="image" />
            </NavLink>
          </div>
        </div>
      )
    }

    return (
      <div className={classes["main-navigation"]}>
        <div className={classes.logo} >
          <NavLink to="/"><img src={logo} /></NavLink>
        </div>
        <div className={classes["imagex-description"]}>
          <p className={classes["imagex-title"]}>ImageX</p>
          <p className={classes["imagex-subtitle"]}>Photos for everyone</p>
        </div>
        <div className={classes["image-search"]}>
          <SearchBar />
        </div>
        <ul>
          <li>
            <NavLink activeClassName={classes["active-link"]} to="/unsplash" exact className={classes["navbar-links"]}>Unsplash</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes["active-link"]} to="/pixabay" exact className={classes["navbar-links"]}>Pixabay</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes["active-link"]} to="/computerVision" className={classes["navbar-links"]}>Search By Image</NavLink>
          </li>
          <li className={classes["main-navigation__random-image-btn"]} onClick={this.props.randomImageLoad}>
            Random Image
          </li>
        </ul>
        {authenticationInfo}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    userProfileInfo: state.account.userProfileInfo
  }
}



export default connect(mapStateToProps)(MainNavbar);