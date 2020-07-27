import React , { Component } from 'react';



import classes from './Home.module.css';
import Search from '../../components/UI/Search/Search';

class Home extends Component {

    render(){
        return (
            <div class={classes.Home}>
                <div className={classes["hero-container"]}>
                    <div className={classes["hero-container__maintext"]}>
                        <h1>Unsplash</h1>
                        <p>Your source of freely-usable images.</p>
                        <p>Powered by creators everywhere.</p>
                    </div>
                    <div className={classes["hero-container__subtext"]}>
                        <Search />
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;