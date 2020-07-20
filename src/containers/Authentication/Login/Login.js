import React , { Component } from 'react';
import classes from './Login.module.css';
import logo from '../../../assets/images/logo.png';

class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }

    formSubmissionHandler = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <div className={classes.Login}>
                <div className={classes["logo"]}>
                    <img src={logo} alt="logo" />
                </div>
                <h3>Login</h3>
                <h5>Welcome back.</h5>
                <a href="#" >Login with facebook</a>
                <h5>OR</h5>
                <form onSubmit={this.formSubmissionHandler}>
                    <h4>Email</h4>
                    <input type="text" />
                    <div>
                        <h4>Password</h4>
                        <h6>Forgot your password</h6>
                    </div>
                    <input type="password" />
                    <button>Login</button>
                </form>
                <h5>Don't have an account? <a href="#">Join</a></h5>
            </div>
        );
    }
}


export default Login;