import React, {Component} from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Unsplash/Navigation/Navbar';
import HeroSection from '../../components/Unsplash/HeroSection/HeroSection';
import HeroSection1 from '../../components/Common/HeroSection/HeroSection';
import * as actions from '../../store/actions/index';
import classes from './Unsplash.module.css';





class Unsplash extends Component {


  componentDidMount(){
    this.props.onRandomHeroImageLoad();
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <div className={classes["hero-container"]}>
          <HeroSection
            title="Unsplash"
            subtitle1="Your source of freely-usable images."
            subtitle2="Powered by creators everywhere."
            subtitle3="Trending: flower, wallpapers, backgrounds, happy, love"
          />
        </div>
        {/* <HeroSection platform="Unsplash" /> */}
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
