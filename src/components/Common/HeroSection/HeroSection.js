import React , { Component } from 'react';


import Search from '../../UI/Search/Search';
import classes from './HeroSection.module.css';


class HeroSection extends Component {

    render(){
        return (
            <React.Fragment>
                <div className={classes["mainsection"]}>
                    <h1 className={classes["mainsection__title"]}>{this.props.title}</h1>
                    <p className={classes["mainsection__subtitle"]}>{this.props.subtitle1}</p>
                    <p className={classes["mainsection__subtitle"]}>{this.props.subtitle2}</p>
                    <form className={classes["mainsection__form"]} onSubmit={this.formSubmitHandler}>
                        <Search />
                    </form>
                    <p className={classes["mainsection__trending"]}>{this.props.subtitle3}</p>
                </div>
                <div className={classes["subsection"]}>
                </div>
            </React.Fragment>
        )
    }
}


export default HeroSection;