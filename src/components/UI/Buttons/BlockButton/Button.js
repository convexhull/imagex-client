import React, { Component } from 'react';

import classes from './Button.module.css';

class Button extends Component {

    render(){
        let elementClasses = [classes["Button"]];
        if(this.props.theme === "facebook"){
            elementClasses.push(classes["facebook-btn"]);
        }
        if(this.props.theme === "imagex-default"){
            elementClasses.push(classes["imagex-default-btn"])
        }
        return (
            <button className={elementClasses.join(' ')} onClick={this.props.clicked} > {this.props.children} </button>
        );
    }
}

export default Button;

