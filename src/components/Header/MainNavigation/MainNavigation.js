import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import Authenticate from './Authenticate/Authenticate';
import logo from '../../../assets/images/logo.png';



class MainNavbar extends Component {

    render(){
        return (
          <div className={classes["main-navigation"]}>
              <div className={classes.logo} >
                <img src={logo} />
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
                <li>
                  <NavLink to="#" className={classes["navbar-links"]} >...</NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes["navbar-links"]}>Search By Image</NavLink>
                </li>
              </ul>
              <div className={classes.authenticate}>  
                <Authenticate />
              </div>
          </div>
        );
    }
}


export default MainNavbar;