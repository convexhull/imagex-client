import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';


import classes from './Signup.module.css';
import image from '../../../assets/images/signup.jpeg';
import InputField from '../../../components/UI/FormElements/FormElements';
import Button from '../../../components/UI/Buttons/BlockButton/Button';
import * as actions from '../../../store/actions';



class Signup extends Component {

    state = {
        form: {
            firstName: {
                value: '',
                valid: false,
                validityChecks: ['isNonempty'],
                touched: false
            },
            lastName: {
                value: '',
                valid: false,
                validityChecks: ['isNonempty'],
                touched: false
            },
            userName: {
                value: '',
                valid: false,
                validityChecks: ['isNonempty', 'isAlphaNum'],
                touched: false
            },
            email: {
                value: '',
                valid: false,
                validityChecks: ['isNonempty', 'isEmail'],
                touched: false
            },
            password: {
                value: '',
                valid: false,
                validityChecks: ['isNonempty', 'minlength6'],
                touched: false
            }
        },
        formIsValid: false
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        if(!this.formIsValid()){
            alert('Please fill all the details properly.');
            return;
        }
        let data = {};
        for(let key in this.state.form){
            data[key] = this.state.form[key].value;
        }
        this.props.onSubmitForm(data, this.props.history);
    }

    formIsValid = () => {
        let valid = true;
        for(let formParam in this.state.form) {
            valid = valid && this.state.form[formParam].valid;
        }
        return valid;
    }

    inputChangeHandler = (event, formParam) => {
        let newValue = event.target.value;
        let valid = this.isValidInput(newValue, formParam);
        this.setState((prevState, props) => {
            return {
                form: {
                    ...prevState.form,
                    [formParam]: {
                        ...prevState.form[formParam],
                        value: newValue,
                        valid: valid,
                        touched: true  
                    }
                }
            }
        })
    }

    isValidInput = (stringToValidate, formParam) => {
        let validationFactors = this.state.form[formParam].validityChecks;
        let valid = true;
        validationFactors.forEach((validationFactor) => {
            if(validationFactor === "isNonempty"){
                valid = valid && !validator.isEmpty(stringToValidate);
            }
            if(validationFactor === "isEmail") {
                valid = valid && validator.isEmail(stringToValidate);
            }
            if(validationFactor === "minlength6") {
                valid = valid && validator.isLength(stringToValidate, {min: 6});
            }
            if(validationFactor === "isAlphaNum") {
                valid = valid && validator.isAlphanumeric(stringToValidate);
            }
        })
        return valid;
    }

    render(){
        return (
            <div className={classes.Signup}>
                <div className={classes["image-container"]}>
                    <img src={image} />
                </div>
                <div className={classes["form-container"]}>
                    <div className={classes["signup-info"]}>
                        <h1>Join ImageX</h1>
                        <h4 className={classes["signup-info__login-option"]}>Already have an account? <Link to="/login">Login</Link></h4>
                        {/* <div className={classes["facebook-join"]}>
                            <Button theme="facebook"><span><ion-icon name="logo-facebook"></ion-icon></span>Join using Facebook</Button>
                        </div> */}
                        <p>OR</p>
                        <form onSubmit={this.formSubmitHandler}>
                            <div className={classes["name-container"]}>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="First Name"
                                        value={this.state.form.firstName.value || ''}
                                        onChange={(event) => this.inputChangeHandler(event,'firstName')}
                                        valid={!this.state.form.firstName.touched || this.state.form.firstName.valid}
                                        errorMsg="*First Name is required"
                                    />
                                </div>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="Last Name"
                                        value={this.state.form.lastName.value || ''}
                                        onChange={(event) => this.inputChangeHandler(event,'lastName')}
                                        valid={!this.state.form.lastName.touched || this.state.form.lastName.valid}
                                        errorMsg="*Last Name is required"
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    elementType="email"
                                    required
                                    label="Email address"
                                    value={this.state.form.email.value || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'email')}
                                    valid={!this.state.form.email.touched || this.state.form.email.valid}
                                    errorMsg="Enter a valid email"
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="text"
                                    label="Username (only letters and numbers)"
                                    value={this.state.form.userName.value || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'userName')}
                                    valid={!this.state.form.userName.touched || this.state.form.userName.valid}
                                    errorMsg="Enter a valid Username"
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="password"
                                    label="Password (min. 6 char)"
                                    value={this.state.form.password.value || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'password')}
                                    valid={!this.state.form.password.touched || this.state.form.password.valid}
                                    errorMsg="Enter a valid password. Should have atleast 6 characters"
                                />
                            </div>
                            <div>
                                <Button btnLink="#" clicked={this.onSubmitForm}> Join  </Button>
                            </div>
                        </form>
                        <p><small>By joining, you agree to the Terms and Privacy Policy.</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm: (userInfo, history) => dispatch(actions.asyncUserSignupStart(userInfo, history))
    }
}

export default connect(null, mapDispatchToProps)(Signup);