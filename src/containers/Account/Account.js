import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";
import InputElement from "../../components/UI/FormElements/FormElements";
import Button from "../../components/UI/Buttons/BlockButton/Button";
import * as actions from "../../store/actions/index";

class Account extends Component {
  state = {
    firstName: '',
    form: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      bio: ""
    }
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("updated");
  }

  componentDidMount() {
    this.props.onLoadAccountInfo();
    let val = this.props.userProfileInfo && this.props.userProfileInfo.firstName;
    this.setState({
      firstName: val
    })
  }

  

  imageSelectHandler = () => {
    this.inputRef.current.click();
  };

  imageUploadHandler = (event) => {
    let file = event.target.files[0];
    this.props.onProfilePicUpdate(file);
    console.log(event.target.files[0]);
  };

  inputChangeHandler = (event, element) => {
    let updatedValue = event.target.value;
    let elementToUpdate = element;
    this.setState({
      form: {
        ...this.state.form,
        [elementToUpdate]: updatedValue,
      },
    });
  };

  render() {
    return (
      <div class={classes["Account"]}>
        <h2 className={classes["Account__title"]}>Edit profile</h2>
        <div className={classes["basic-info"]}>
          <div className={classes["basic-info__profile-pic"]}>
            <img
              src={
                this.props.userProfileInfo &&
                this.props.userProfileInfo.profilePicUrl
              }
              alt="profile picture"
            />
            <input
              ref={this.inputRef}
              style={{ display: "none" }}
              type="file"
              onChange={this.imageUploadHandler}
            />
            <button
              className={classes["basic-info__upload-btn"]}
              type="button"
              onClick={this.imageSelectHandler}
            >
              Change profile picture
            </button>
          </div>
          <div className={classes["basic-info__account-info"]}>
            <div className={classes["basic-info__first-name"]}>
              <InputElement
                elementType="text"
                label="First Name"
                value={this.state.form.firstName}
                onChange={(event) =>
                  this.inputChangeHandler(event, "firstName")
                }
              />
            </div>
            <div className={classes["basic-info__last-name"]}>
              <InputElement
                elementType="text"
                label="Last Name"
                value={this.state.form.lastName}
                onChange={(event) => this.inputChangeHandler(event, "lastName")}
              />
            </div>
          </div>
        </div>
        <div className={classes["extra-info"]}>
          <div className={classes["extra-info__email"]}>
            <InputElement
              elementType="text"
              label="Email Address"
              value={this.state.form.email}
              onChange={(event) => this.inputChangeHandler(event, "email")}
            />
          </div>
          <div className={classes["extra-info__username"]}>
            <InputElement
              elementType="text"
              label="Username"
              value={this.state.form.userName}
              onChange={(event) => this.inputChangeHandler(event, "userName")}
            />
          </div>
          <div className={classes["extra-info__bio"]}>
            <InputElement
              elementType="textarea"
              label="Bio"
              value={this.state.form.bio}
              onChange={(event) => this.inputChangeHandler(event, "bio")}
            />
          </div>
        </div>
        <div className={classes["Account__submit-btn"]}>
          <Button theme="imagex-default">Update account</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.account.userProfileInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfilePicUpdate: (image) => dispatch(actions.asyncUserProfilePicUpdateStart(image)),
    onLoadAccountInfo: () => dispatch(actions.asyncUserFetchAccountStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
