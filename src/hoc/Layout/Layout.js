import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';




class Layout extends Component {

  render(){
    return (
      <Fragment>
        <header>
          <h1>Some header</h1>
          {this.props.isAuthenticated ? <h3>Logged in!</h3> : <h3>Please log in</h3>}
        </header>
        {this.props.children}
        <footer>
          <h2>Some footer</h2>
        </footer>
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null 
  }
}


export default connect(mapStateToProps)(Layout);