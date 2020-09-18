import React, { Component } from "react";
import { Link } from 'react-router-dom';


import classes from './ErrorBoundary.module.css';


class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes["PageNotFound"]}>
          <div className={classes["notfound"]}>
            <div className={classes["notfound-404"]}>
              <h1>Oops!</h1>
              <h2>We encountered an error.</h2>
            </div>
            <a href="/">Take me to sanity</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
