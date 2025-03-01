import React, { Component } from "react";

import classes from "./Home.module.css";
import ImageLazyLoader from "../../components/Unsplash/ScrollLazyLoading/ScrollLazyLoading";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import CategoryNavigation from "../../components/Header/CategoryNavigation/CategoryNavigation";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <CategoryNavigation hideLogo={true} platform="unsplash" />
        <div className={classes["hero-container"]}>
          <HeroSection
            title="ImageX"
            subtitle1="Your source of freely-usable images."
            subtitle2="Powered by creators everywhere."
            subtitle3="Trending: flower, wallpapers, backgrounds, happy, love"
          />
        </div>
        <div className={classes["trending-images"]}>
          <ImageLazyLoader keyword="people" />
        </div>
      </div>
    );
  }
}

export default Home;
