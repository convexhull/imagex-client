import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';




import classes from './MainNavigation.module.css';
import logo from '../../../assets/images/logo.png';



class MainNavbar extends Component {

  render() {
    
    let authenticationInfo = (
      <ul className={classes.authenticate}>
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
        <ul className={classes.authenticate}>
          <li>
            Notification
          </li>
          <li>
            ProfilePic
          </li>
        </ul>
      )
    }

    return (
      <div className={classes["main-navigation"]}>
        <div className={classes.logo} >
          <NavLink to="/"><img src={logo} /></NavLink>
        </div>
        <div className={classes["image-search"]}>
          <input type="text" placeholder="Search free high resolution photos" />
        </div>
        <ul>
          <li>
            <NavLink to="/unsplash" exact className={classes["navbar-links"]}>Unsplash</NavLink>
          </li>
          <li>
            <NavLink to="/pixabay" exact className={classes["navbar-links"]}>Pixabay</NavLink>
          </li>
          <li className={classes["main-navigation__random-image-btn"]} onClick={this.props.randomImageLoad}>
            RandomImage
          </li>
          <li>
            <NavLink to="#" className={classes["navbar-links"]} >...</NavLink>
          </li>
          <li>
            <NavLink to="/searchByImage" className={classes["navbar-links"]}>Search By Image</NavLink>
          </li>
        </ul>
        {authenticationInfo}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}



export default connect(mapStateToProps)(MainNavbar);