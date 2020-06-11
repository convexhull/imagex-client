import React, {Component} from 'react';
import classes from './MainNavigation.module.css';
import Authenticate from './Authenticate/Authenticate';
import logo from '../../../assets/images/logo.png';



class MainNavbar extends Component {

    render(){
        return (
          <div className={classes["main-navigation"]}>
              <ul>
                <div className={classes.logo}>
                  <img src={logo} />
                </div>
                <input type="text" />
                <li>Unsplash</li>
                <li>Pixabay</li>
                <a href="#">...</a>
                <a href="#">Search by Image</a>
                <Authenticate />
              </ul>
          </div>
        );
    }
}


export default MainNavbar;