import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import classes from './Signup.module.css';
import image from '../../../assets/images/signup.jpeg';
import InputField from '../../../components/UI/FormElements/FormElements';
import Button from '../../../components/UI/Buttons/BlockButton/Button';
import * as actions from '../../../store/actions';



class Signup extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.form);
    }

    inputChangeHandler = (event, formParam) => {
        let newValue = event.target.value;
        this.setState((prevState, props) => {
            return {
                form: {
                    ...prevState.form,
                    [formParam]: newValue
                }
            }
        })
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
                        <h4>Already have an account? <Link to="/login">Login</Link></h4>
                        <div className={classes["facebook-join"]}>
                            <Button theme="facebook"><span><ion-icon name="logo-facebook"></ion-icon></span>Join using Facebook</Button>
                        </div>
                        <p>OR</p>
                        <form onSubmit={this.formSubmitHandler}>
                            <div className={classes["name-container"]}>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="First Name"
                                        value={this.state.form.firstName || ''}
                                        onChange={(event) => this.inputChangeHandler(event,'firstName')}
                                    />
                                </div>
                                <div>
                                    <InputField
                                        elementType="text"
                                        label="Last Name"
                                        value={this.state.form.lastName || ''}
                                        onChange={(event) => this.inputChangeHandler(event,'lastName')}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    elementType="email"
                                    required
                                    label="Email address"
                                    value={this.state.form.email || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'email')}
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="text"
                                    label="Username (only letters, numbers, and underscores)"
                                    value={this.state.form.userName || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'userName')}
                                />
                            </div>
                            <div>
                                <InputField
                                    elementType="password"
                                    label="Password (min. 6 char)"
                                    value={this.state.form.password || ''}
                                    onChange={(event) => this.inputChangeHandler(event,'password')}
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
        onSubmitForm: (userInfo) => dispatch(actions.asyncUserSignupStart(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Signup);