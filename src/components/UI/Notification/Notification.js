import React, { Component } from 'react';

import classes from './Notification.module.css';

class Notification extends Component {

    render() {
        let notificationClasses = [classes["Notification"]];
        if(this.props.show){
            notificationClasses.push(classes["Notification--visible"]);
        }
        return (
            <div className={notificationClasses.join(' ')}>
                <p className={classes["notification__title"]}>{this.props.title}</p>
                <p className={classes["notification__close-btn"]} onClick={this.props.clicked}>X</p>
            </div>
        );
    }
}


export default Notification;