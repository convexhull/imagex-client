import React, {Component} from 'react';
import { connect } from 'react-redux';

import HeroSection from '../../components/Unsplash/HeroSection/HeroSection';
import * as actions from '../../store/actions/index';
import classes from './Unsplash.module.css';
import CategoryNav from '../../components/Header/CategoryNavigation/CategoryNavigation';





class Unsplash extends Component {


  render(){
    return (
      <React.Fragment>
        <CategoryNav platform="unsplash" />
        <div className={classes["hero-container"]}>
          <HeroSection
            title="Unsplash"
            subtitle1="Your source of freely-usable images."
            subtitle2="Powered by creators everywhere."
            subtitle3="Trending: flower, wallpapers, backgrounds, happy, love"
          />
        </div>
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




export default connect(mapStateToProps)(Unsplash);
