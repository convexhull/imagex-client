import React, { Component } from "react";


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
          <a href="#">Homepage</a>
        </div>
      </div>
    );
  }
}


export default NotFound;