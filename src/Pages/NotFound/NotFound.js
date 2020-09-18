import React, { Component } from "react";
import { Link } from 'react-router-dom';


import classes from './NotFound.module.css';

class NotFound extends Component {
  render() {
    return (
      <div className={classes["PageNotFound"]} >
        <div className={classes["notfound"]} >
          <div className={classes["notfound-404"]} >
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link to="/">Homepage</Link>
        </div>
      </div>
    );
  }
}


export default NotFound;