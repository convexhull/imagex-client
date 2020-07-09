import React, {Component} from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Unsplash/Navigation/Navbar';
import HeroSection from '../../components/Unsplash/HeroSection/HeroSection';
import * as actions from '../../store/actions/index';





class Unsplash extends Component {


  componentDidMount(){
    this.props.onRandomHeroImageLoad();
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <HeroSection platform="Unsplash" />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    page: state.unsplash.page,
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onRandomHeroImageLoad: () => dispatch(actions.asyncUnsplashGetRandomHeroImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unsplash);
