import React , { Component } from 'react';



import classes from './Home.module.css';
import ImageLazyLoader from '../../components/UI/ScrollLazyLoading/ScrollLazyLoading';
import HeroSection from '../../components/Home/HeroSection/HeroSection';

class Home extends Component {

    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('submitted');
    }

    render(){
        return (
            <div class={classes.Home}>
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
        )
    }

}

export default Home;