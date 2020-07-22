import React , { Component } from 'react';
import classes from './Signup.module.css';

import image from '../../../assets/images/signup.jpeg';



class Signup extends Component {

    render(){
        return (
            <div className={classes.Signup}>
                <div className={classes["image-container"]}>
                    <img src={image} />
                </div>
                <div className={classes["form-container"]}>
                    <div className={classes["signup-info"]}>
                        <h1>Join Unsplash</h1>
                        <form>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;