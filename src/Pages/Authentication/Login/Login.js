import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


import classes from './Login.module.css';
import logo from '../../../assets/images/logo.png';
import * as actions from '../../../store/actions';
import Button from '../../../components/UI/Buttons/BlockButton/Button';
import InputElement from '../../../components/UI/FormElements/FormElements';
import validator from 'validator';
import Notification from '../../../components/UI/Notification/Notification';
import ErrorMessageGenerator from '../../../utils/errorMessage';


class Login extends Component {
    state = {
        form: {
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


    componentWillUnmount() {
        this.props.onClearError();
    }

    

    formSubmissionHandler = (e) => {
        e.preventDefault();
        if(!this.formIsValid()){
            alert('Please fill all the details properly')
            return;
        }
        this.props.onLogin(this.state.form.email.value, this.state.form.password.value);
    }


    inputEmailHandler = (event) => {
        let updatedEmail = event.target.value;
        let valid = this.isValidInput(updatedEmail, 'email');
        this.setState((prevState, props) => {
            return {
                form: {
                    ...prevState.form,
                    email: {
                        ...prevState.form.email,
                        value: updatedEmail,
                        valid: valid
                    }
                }
            }
        })
    }


    inputPasswordHandler = (event) => {
        let updatedPassword = event.target.value;
        let valid = this.isValidInput(updatedPassword, 'password');
        this.setState((prevState, props) => {
            return {
                form: {
                    ...prevState.form,
                    password: {
                        ...prevState.form.password,
                        value: updatedPassword,
                        valid: valid
                    }
                }
            }
        })
    }


    formIsValid = () => {
        let valid = true;
        for(let formParam in this.state.form) {
            valid = valid && this.state.form[formParam].valid;
        }
        return valid;
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
        if(this.props.redirectUrl){
            return <Redirect to={this.props.redirectUrl} />;
        };

        return (
            <div className={classes.Login}>
                <div className={classes["container"]}>
                    <div className={classes["container__logo"]}>
                        <img src={logo} alt="logo" />
                    </div>
                    <h3 className={classes["log-in"]}>Login</h3>
                    <h5 className={classes["wlcm-back"]}>Welcome back.</h5>
                    <div className={classes["container__fbbtn"]}>
                        <Button>Login With Facebook</Button>
                    </div>
                    <h5 className={classes["container__OR"]}>OR</h5>

                    <form onSubmit={this.formSubmissionHandler} className={classes["login-form"]}>
                        <div className={classes["login-form__input"]}>
                            <InputElement
                                elementType="text"
                                label="Email"
                                value={this.state.form.email.value || ''}
                                onChange={this.inputEmailHandler}
                                valid={this.state.form.email.valid}
                                errorMsg="* Required"
                            />
                        </div>
                        
                        <div className={classes["login-form__input"]}>
                            <div className={classes["login-form__password"]}>
                                {/* <p>Password</p> */}
                                {/* <p>Forgot your password</p> */}
                            </div>
                            <InputElement
                                elementType="password"
                                label="Password"
                                value={this.state.form.password.value || ''}
                                onChange={this.inputPasswordHandler}
                                valid={this.state.form.password.valid}
                                errorMsg="* Required"
                            />
                        </div>

                        <div className={classes["container__loginbtn"]}>
                            <Button>Login</Button>
                        </div>
                    </form>
                    <p className={classes["container__signuplink"]}>Don't have an account? <Link to="/signup" >Join</Link> </p>
                </div>
                {this.props.error ? <Notification title={ErrorMessageGenerator(this.props.error)} clicked={this.props.onClearError}/>  : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        redirectUrl: state.auth.redirectUrl,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.asyncUserLoginStart(email, password)),
        onClearError: () => dispatch(actions.clearAuthError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);