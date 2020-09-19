import React, { Component } from "react";
import { connect } from "react-redux";
import validator from 'validator';

import classes from "./Account.module.css";
import InputElement from "../../components/UI/FormElements/FormElements";
import Button from "../../components/UI/Buttons/BlockButton/Button";
import * as actions from "../../store/actions/index";
import Notification from '../../components/UI/Notification/Notification';

class Account extends Component {
  state = {
    form: {
      bio: {
        value: "",
        valid: true,
        validityChecks: [],
        touched: false,
      },
      firstName: {
        value: "",
        valid: true,
        validityChecks: ["isNonempty"],
        touched: false,
      },
      lastName: {
        value: "",
        valid: true,
        validityChecks: ["isNonempty"],
        touched: false,
      },
      userName: {
        value: "",
        valid: true,
        validityChecks: ["isNonempty", "isAlphaNum"],
        touched: false,
      },
      email: {
        value: "",
        valid: true,
        validityChecks: ["isNonempty", "isEmail"],
        touched: false,
      },
    },
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userProfileInfo !== prevProps.userProfileInfo) {
      this.setState({
        form: {
          firstName: {
            value: this.props.userProfileInfo.firstName,
            valid: true,
            validityChecks: ["isNonempty"],
            touched: false,
          },
          lastName: {
            value: this.props.userProfileInfo.lastName,
            valid: true,
            validityChecks: ["isNonempty"],
            touched: false,
          },
          userName: {
            value: this.props.userProfileInfo.userName,
            valid: true,
            validityChecks: ["isNonempty", "isAlphaNum"],
            touched: false,
          },
          email: {
            value: this.props.userProfileInfo.email,
            valid: true,
            validityChecks: ["isNonempty", "isEmail"],
            touched: false,
          },
          bio: {
            value: this.props.userProfileInfo.bio,
            valid: true,
            validityChecks: [],
            touched: false, 
          }
        },
      });
    }
  }

  componentDidMount() {
    if(!this.props.isAuthenticated){
      return this.props.history.replace('/login');
    }
    this.props.onLoadAccountInfo();
  }

  imageSelectHandler = () => {
    this.inputRef.current.click();
  };

  imageUploadHandler = (event) => {
    let file = event.target.files[0];
    if(file.size > 5000000){
      alert('Your file exceeds the maximum supported size limit of 5MB. Please upload a smaller file.');
      this.inputRef.current.value = null;
      return;
    }
    this.props.onProfilePicUpdate(file);
  };

  inputChangeHandler = (event, element) => {
    let updatedValue = event.target.value;
    let elementToUpdate = element;
    let valid = this.isValidInput(updatedValue, element);
    this.setState({
      form: {
        ...this.state.form,
        [elementToUpdate]: {
          ...this.state.form[elementToUpdate],
          value: updatedValue,
          valid: valid,
          touched: true
        }
      }
    });
  };

  isValidInput = (stringToValidate, formParam) => {
    let validationFactors = this.state.form[formParam].validityChecks;
    let valid = true;
    validationFactors.forEach((validationFactor) => {
      if (validationFactor === "isNonempty") {
        valid = valid && !validator.isEmpty(stringToValidate);
      }
      if (validationFactor === "isEmail") {
        valid = valid && validator.isEmail(stringToValidate);
      }
      if (validationFactor === "minlength6") {
        valid = valid && validator.isLength(stringToValidate, { min: 6 });
      }
      if (validationFactor === "isAlphaNum") {
        valid = valid && validator.isAlphanumeric(stringToValidate);
      }
    });
    return valid;
  };

  formIsValid = () => {
    let valid = true;
    for (let formParam in this.state.form) {
      valid = valid && this.state.form[formParam].valid;
    }
    return valid;
  };

  updateBtnHandler = () => {
    if(!this.formIsValid()){
      return alert('Please fill all the details properly');
    }
    let data = {};
    for(let key in this.state.form){
      data[key] = this.state.form[key].value;
    }
    this.props.onUpdateAccountInfo(data);
  };

  render() {
    let profilePicUploadBtnClasses = `${classes["basic-info__upload-btn"]}`;
    if (this.props.profilePicUpdating) {
      profilePicUploadBtnClasses += ` ${classes["basic-info__upload-btn--uploading"]}`;
    }
    return (
      <div className={classes["Account"]}>
        <h2 className={classes["Account__title"]}>Edit profile</h2>
        <div className={classes["basic-info"]}>
          <div className={classes["basic-info__profile-pic"]}>
            <div className={classes["basic-info__profile-image-container"]}>
              <img
                src={
                  (this.props.userProfileInfo &&
                    this.props.userProfileInfo.profilePicUrl) ||
                  "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                }
                alt="user's dp"
              />
            </div>
            <input
              ref={this.inputRef}
              style={{ display: "none" }}
              type="file"
              onChange={this.imageUploadHandler}
              accept="image/*"
            />
            <button
              className={profilePicUploadBtnClasses}
              type="button"
              onClick={this.imageSelectHandler}
              disabled={this.props.profilePicUpdating}
            >
              {this.props.profilePicUpdating
                ? "Updating Picture..."
                : "Change profile picture"}
            </button>
          </div>
          <div className={classes["basic-info__account-info"]}>
            <div className={classes["basic-info__first-name"]}>
              <InputElement
                elementType="text"
                label="First Name"
                value={this.state.form.firstName.value}
                onChange={(event) =>
                  this.inputChangeHandler(event, "firstName")
                }
                valid={!this.state.form.firstName.touched || this.state.form.firstName.valid}
                errorMsg="* Required"
              />
            </div>
            <div className={classes["basic-info__last-name"]}>
              <InputElement
                elementType="text"
                label="Last Name"
                value={this.state.form.lastName.value}
                onChange={(event) => this.inputChangeHandler(event, "lastName")}
                valid={!this.state.form.lastName.touched || this.state.form.lastName.valid}
                errorMsg="* Required"
              />
            </div>
          </div>
        </div>
        <div className={classes["extra-info"]}>
          <div className={classes["extra-info__email"]}>
            <InputElement
              elementType="text"
              label="Email Address"
              value={this.state.form.email.value}
              onChange={(event) => this.inputChangeHandler(event, "email")}
              valid={!this.state.form.email.touched || this.state.form.email.valid}
              errorMsg="* Enter a valid email"
              disabled={true}
            />
          </div>
          <div className={classes["extra-info__username"]}>
            <InputElement
              elementType="text"
              label="Username (only letters and numbers)"
              value={this.state.form.userName.value}
              onChange={(event) => this.inputChangeHandler(event, "userName")}
              valid={!this.state.form.userName.touched || this.state.form.userName.valid}
              errorMsg="* Enter a valid username"
            />
          </div>
          <div className={classes["extra-info__bio"]}>
            <InputElement
              elementType="textarea"
              label="Bio"
              value={this.state.form.bio.value}
              onChange={(event) => this.inputChangeHandler(event, "bio")}
              valid={!this.state.form.bio.touched || this.state.form.bio.valid}
              errorMsg="* Enter a valid bio"
            />
          </div>
        </div>
        <div className={classes["Account__submit-btn"]}>
          <Button theme="imagex-default" clicked={this.updateBtnHandler} disabled={this.props.profileUpdating} >
            {this.props.profileUpdating ? "..." : "Update account"} 
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.account.userProfileInfo,
    profilePicUpdating: state.account.profilePicUploading,
    isAuthenticated: state.auth.token !== null,
    profileUpdating: state.account.profileUpdating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfilePicUpdate: (image) => dispatch(actions.asyncUserProfilePicUpdateStart(image)),
    onLoadAccountInfo: () => dispatch(actions.asyncUserFetchAccountStart()),
    onUpdateAccountInfo: (data) => dispatch(actions.asyncUserAccountUpdateStart(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
