import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainNavbar from '../../components/UI/MainNavigation/MainNavigation';



class Layout extends Component {

  render(){
    return (
      <Fragment>
        <header>
          <MainNavbar />
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