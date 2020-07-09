import React , { Component } from 'react';
import classes from './Spinner2.module.css';

class Spinner2 extends Component {

    render(){
        return (
            <div className={classes["intersecting-circles-spinner"]}>
                <div className={classes["spinnerBlock"]}>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                    <span className={classes["circle"]}></span>
                </div>
            </div>
        )
    }
}


export default Spinner2;