import React, { Component } from 'react';
import classes from './EndOfResults.module.css';
import gif from '../../../assets/gifs/cat.gif';


class EndOfResults extends Component {
    render() {
        return (
            <div className={classes["EndOfResults"]}>
                <p className={classes["message"]}>That's all folks :)</p>
                <div className={classes["image-container"]}>
                    <img src={gif} />
                </div>
            </div>
        )
    }
}



export default EndOfResults;