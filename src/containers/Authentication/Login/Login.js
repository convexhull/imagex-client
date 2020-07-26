import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


import classes from './Login.module.css';
import logo from '../../../assets/images/logo.png';
import * as actions from '../../../store/actions';
import Button from '../../../components/UI/Buttons/BlockButton/Button';
import InputElement from '../../../components/UI/FormElements/FormElements';


class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }

    

    formSubmissionHandler = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state.form.email, this.state.form.password);
    }


    inputEmailHandler = (event) => {
        let updatedEmail = event.target.value;
        this.setState((prevState, props) => {
            return {
                form: {
                    email: updatedEmail,
                    password: prevState.form.password
                }
            }
        })
    }


    inputPasswordHandler = (event) => {
        let updatedPassword = event.target.value;
        this.setState((prevState, props) => {
            return {
                form: {
                    email: prevState.form.email,
                    password: updatedPassword
                }
            }
        })
    }



    render(){
        if(this.props.redirectUrl){
            return <Redirect to={this.props.redirectUrl} />;
        }
        return (
            <div className={classes.Login}>
                <div>
                    <div className={classes["logo"]}>
                        <img src={logo} alt="logo" />
                    </div>
                    <h3>Login</h3>
                    <h5>Welcome back.</h5>
                    <Button>Login With Facebook</Button>
                    <h5>OR</h5>
                    <form onSubmit={this.formSubmissionHandler}>
                        <h4>Email</h4>
                        <InputElement
                            elementType="text"
                            label="Email"
                            value={this.state.form.email|| ''}
                            onChange={this.inputEmailHandler}
                        />
                        <div className={classes.password}>
                            <h4>Password</h4>
                            <h6>Forgot your password</h6>
                        </div>
                        <InputElement
                            elementType="password"
                            label="Passwordi"
                            value={this.state.form.password || ''}
                            onChange={this.inputPasswordHandler}
                        />

                        <button>Login</button>
                    </form>
                    <h5>Don't have an account? <Link to="/signup" >Join</Link></h5>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        redirectUrl: state.auth.redirectUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.asyncUserLoginStart(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);