import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginInfo extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <h1>Logged in!</h1>
        ) : (
          <h1>Please Login</h1>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.token !== null
    }
}


export default connect(mapStateToProps)(LoginInfo);