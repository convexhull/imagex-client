import React, { Component } from 'react';

import classes from './Button.module.css';

class Button extends Component {

    render(){
        return (
            <a className={classes.Button} href={this.props.btnLink} > {this.props.btnTitle} </a>
        )
    }
}

export default Button;

