import React, { Component } from 'react';

import classes from './Account.module.css';
import InputElement from '../../components/UI/FormElements/FormElements';
import Button from '../../components/UI/Buttons/BlockButton/Button';


class Account extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }


    imageSelectHandler = () => {
        this.inputRef.current.click();
    }

    imageUploadHandler = (event) => {
        
    }


    render() {
        return (
          <div class={classes["Account"]}>
            <h2 className={classes["Account__title"]}>Edit profile</h2>
            <div className={classes["basic-info"]}>
              <div className={classes["basic-info__profile-pic"]}>
                <img
                  src="https://randomuser.me/api/portraits/women/8.jpg"
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
                  <InputElement elementType="text" label="First Name" />
                </div>
                <div className={classes["basic-info__last-name"]}>
                  <InputElement elementType="text" label="Last Name" />
                </div>
              </div>
            </div>
            <div className={classes["extra-info"]}>
              <div className={classes["extra-info__email"]}>
                <InputElement elementType="text" label="Email Address" />
              </div>
              <div className={classes["extra-info__username"]}>
                <InputElement elementType="text" label="Username" />
              </div>
              <div className={classes["extra-info__bio"]}>
                <InputElement elementType="textarea" label="Bio" />
              </div>
            </div>
            <div className={classes["Account__submit-btn"]}>
                <Button theme="imagex-default">Update account</Button>
            </div>
          </div>
        );
    }
};




export default Account;