import React , { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';





class Modal extends Component {

    render(){
        return (
            <React.Fragment>
                <Backdrop />
                <div className={classes.Modal}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}



export default Modal;