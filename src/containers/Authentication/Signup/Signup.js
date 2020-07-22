import React , { Component } from 'react';
import classes from './Signup.module.css';


class Signup extends Component {

    render(){
        return (
            <div className={classes.Signup}>
                <div className={classes["image-container"]}>
                    <h1>Image@</h1>
                </div>
                <div className={classes["form-container"]}>
                    <form>
                        <h1>Form</h1>
                    </form>
                </div>
            </div>
        )
    }
}


export default Signup;