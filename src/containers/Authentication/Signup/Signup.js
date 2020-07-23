import React , { Component } from 'react';
import { connect } from 'react-redux';


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
        alert('form submitted');
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
                        <h1>Join Unsplash</h1>
                        <h4>Already have an account? <a href="#">Login</a></h4>
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
                            <Button btnTitle="Join"  btnLink="#" />
                        </form>
                        <small>By joining, you agree to the Terms and Privacy Policy.</small>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm: (userInfo) => dispatch(actions.asyncUserSignup(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Signup);