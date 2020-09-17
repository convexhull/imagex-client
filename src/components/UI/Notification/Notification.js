import React, { Component } from 'react';

import classes from './Notification.module.css';

class Notification extends Component {

    render() {
        let notificationClasses = [classes["Notification"]];
        switch(this.props.theme){
            case "success":
                notificationClasses.push(classes["Notification--success"]);
                break;
            case "error":
                notificationClasses.push(classes["Notification--error"]);
                break;
            default:
                notificationClasses.push(classes["Notification--success"]);
        }
        let closeBtnClasses = [classes["notification__close-btn"]];
        return (
            <div className={notificationClasses.join(' ')}>
                <p className={classes["notification__title"]}>{this.props.title}</p>
                <p className={closeBtnClasses} onClick={this.props.clicked}>X</p>
            </div>
        );
    }
}


export default Notification;