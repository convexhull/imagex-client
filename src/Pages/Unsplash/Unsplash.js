import React, {Component} from 'react';
import { connect } from 'react-redux';

import HeroSection from '../../components/Unsplash/HeroSection/HeroSection';
import classes from './Unsplash.module.css';
import CategoryNav from '../../components/Header/CategoryNavigation/CategoryNavigation';
import * as actions from '../../store/actions/index';





class Unsplash extends Component {

  state = {
    keyword: ''
  }

  componentDidMount(){
    this.props.onSetActivePlatform("unsplash");
  }

  inputHandler = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  render(){
    return (
      <React.Fragment>
        <CategoryNav platform="unsplash" clicked={this.inputHandler} />
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


const mapDispatchToProps = (dispatch) => {
  return {
    onSetActivePlatform: (platform) =>  dispatch(actions.setActivePlatform(platform))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Unsplash);
