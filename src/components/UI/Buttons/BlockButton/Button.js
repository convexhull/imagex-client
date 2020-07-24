import React, { Component } from 'react';

import classes from './Button.module.css';

class Button extends Component {

    render(){
        let elementClasses = [classes["Button"]];
        if(this.props.theme === "facebook"){
            elementClasses.push(classes["facebook-btn"]);
        }
        return (
            <button className={elementClasses.join(' ')} > {this.props.children} </button>
            // <a className={classes.Button} href={this.props.btnLink} onClick={this.props.clicked} > <button>{this.props.btnTitle} </button></a>
        );
    }
}

export default Button;

