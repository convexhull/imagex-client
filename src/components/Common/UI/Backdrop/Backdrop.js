import React , { Component } from 'react';
import classes from './Backdrop.module.css';




class Backdrop extends Component {

    render(){
        return (
            <div className={classes.Backdrop}>
                <h1>Backdrop</h1>
            </div>
        )
    }
}



export default Backdrop;