import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


import classes from './MainNavigation.module.css';
import Authenticate from './Authenticate/Authenticate';
import logo from '../../../assets/images/logo.png';



class MainNavbar extends Component {

    render(){
        return (
          <div className={classes["main-navigation"]}>
              <ul>
                <div className={classes.logo} >
                  <img src={logo} />
                </div>
                <input type="text" placeholder="Search free high resolution photos" />
                <NavLink to="/unsplash" exact className={classes["navbar-links"]}>Unsplash</NavLink>
                <NavLink to="/pixabay" exact className={classes["navbar-links"]}>Pixabay</NavLink>
                <NavLink to="#" className={classes["navbar-links"]} >...</NavLink>
                <NavLink to="#" className={classes["navbar-links"]} >Search by Image</NavLink>
                <Authenticate style={{fontSize: "500px"}}  />
              </ul>
          </div>
        );
    }
}


export default MainNavbar;