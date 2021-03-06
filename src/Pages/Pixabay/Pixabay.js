import React, { Component } from "react";
import { connect } from "react-redux";

import HeroSection from "../../components/Pixabay/HeroSection/HeroSection";
import CategoryNav from "../../components/Header/CategoryNavigation/CategoryNavigation";
import classes from "./Pixabay.module.css";
import * as actions from '../../store/actions/index';

class Pixabay extends Component {

  state = {
    keyword: ''
  }

  componentDidMount(){
    this.props.onSetActivePlatform("pixabay");
  }

  keywordChangeHandler = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  render() {
    return (
      <React.Fragment>
        <CategoryNav platform="pixabay" clicked={this.keywordChangeHandler} />
        <div className={classes["hero-container"]}>
          <HeroSection
            title="Pixabay"
            subtitle1="Stunning free images & royalty free stock"
            subtitle2="Over 1.8 million+ high quality stock images and videos shared by our talented community."
            subtitle3="Trending: nature, wallpaper, food, business, love, computer, money, beach, office, car, sky, summer"
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.pixabay.page,
    isAuthenticated: state.auth.token !== null,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetActivePlatform: (platform) =>  dispatch(actions.setActivePlatform(platform))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pixabay);
