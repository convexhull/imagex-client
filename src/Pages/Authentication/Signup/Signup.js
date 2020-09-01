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
                validityChecks: ['isNonempty'],
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
                validityChecks: ['isNonempty'],
                touched: false
            }
        }
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.form, this.props.history);
    }

    inputChangeHandler = (event, formParam) => {
        let newValue = event.target.value;
        let valid = this.isValidInput(formParam);
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

    isValidInput = (formParam) => {
        let stringToValidate = this.state.form[formParam].value.trim();
        let validationFactors = this.state.form[formParam].validityChecks;
        let valid = true;
        validationFactors.forEach((validationFactor) => {
            if(validationFactor === "isNonempty"){
                valid = valid && !validator.isEmpty(stringToValidate);
            }
            if(validationFactor === "isEmail") {
                valid = valid && validator.isEmail(stringToValidate);
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
                                    />
                                </div>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="Last Name"
                                        value={this.state.form.lastName.value || ''}
                                        onChange={(event) => this.inputChangeHandler(event,'lastName')}
                                        valid={!this.state.form.lastName.touched || this.state.form.lastName.valid}
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
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="text"
                                    label="Username (only letters, numbers, and underscores)"
                                    value={this.state.form.userName.value || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'userName')}
                                    valid={!this.state.form.userName.touched || this.state.form.userName.valid}
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="password"
                                    label="Password (min. 6 char)"
                                    value={this.state.form.password.value || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'password')}
                                    valid={!this.state.form.password.touched || this.state.form.password.valid}
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