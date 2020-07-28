import React , { Component } from 'react';



import classes from './Home.module.css';
import Search from '../../components/UI/Search/Search';

class Home extends Component {

    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('submitted');
    }

    render(){
        return (
            <div class={classes.Home}>
                <div className={classes["hero-container"]}>
                    <div className={classes["hero-container__mainsection"]}>
                        <h1 className={classes["mainsection__title"]}>ImageX</h1>
                        <p className={classes["mainsection__subtitle"]}>Your source of freely-usable images.</p>
                        <p className={classes["mainsection__subtitle"]}>Powered by creators everywhere.</p>
                        <form className={classes["mainsection__form"]} onSubmit={this.formSubmitHandler}>
                            <Search />
                        </form>
                        <p className={classes["mainsection__trending"]}>Trending: flower, wallpapers, backgrounds, happy, love</p>
                    </div>
                    <div className={classes["hero-container__subsection"]}>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;