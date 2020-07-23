import React , { Component } from 'react';
import classes from './Signup.module.css';

import image from '../../../assets/images/signup.jpeg';
import InputField from '../../../components/UI/FormElements/FormElements';



class Signup extends Component {

    formSubmitHandler = (event) => {
        event.preventDefault();
        alert('form submitted');
    }
    render(){
        return (
            <div className={classes.Signup}>
                <div className={classes["image-container"]}>
                    <img src={image} />
                </div>
                <div className={classes["form-container"]}>
                    <div className={classes["signup-info"]}>
                        <h1>Join Unsplash</h1>
                        <h4>Already have an account? <a href="#">Login</a></h4>
                        <p>OR</p>
                        
                        <form onSubmit={this.formSubmitHandler}>
                            <div className={classes["name-container"]}>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="First Name"
                                    />
                                </div>
                                <div>
                                    <InputField
                                        elementType="text"
                                        required
                                        label="Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    elementType="email"
                                    required
                                    label="Email address"
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="text"
                                    label="Username (only letters, numbers, and underscores)"
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="password"
                                    label="Password (min. 6 char)"
                                />
                            </div>
                            <button>Join</button>
                        </form>
                        <small>By joining, you agree to the Terms and Privacy Policy.</small>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;