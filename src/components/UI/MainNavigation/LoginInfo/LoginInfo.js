import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class LoginInfo extends Component {
  render() {
    let info = <h2>Please Login</h2>;
    if(this.props.isAuthenticated){
      info = (
        <Link to="/profile" >Profile</Link>
      )
    }
    return (
      <div>
        {info}
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