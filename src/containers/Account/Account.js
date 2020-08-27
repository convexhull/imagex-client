import React, { Component } from 'react';

import classes from './Account.module.css';
import InputElement from '../../components/UI/FormElements/FormElements';


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
                <h2>Edit profile</h2>
                <div className={classes["basic-info"]}>
                    <div className={classes["basic-info__profile-pic"]}>
                        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="profile picture" />
                        <input ref={this.inputRef} style={{display: 'none'}} type="file" onChange={this.imageUploadHandler} />
                        <button type="button" onClick={this.imageSelectHandler}>Upload</button>
                    </div>
                    <div className={classes["basic-info__account-info"]}>
                        <div>
                            <InputElement elementType="text" label="First Name" />
                        </div>
                        <div>
                            <InputElement elementType="text" label="Last Name" />
                        </div>
                        <div>
                            <InputElement elementType="text" label="Email Address" />
                        </div>
                        
                    </div>  
                </div>
                <div className={classes["extra-info"]}>

                </div>

            </div>
        )
    }
};




export default Account;