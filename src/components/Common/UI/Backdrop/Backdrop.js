import React , { Component } from 'react';
import classes from './Backdrop.module.css';

class Backdrop extends Component {
    render(){
        let backdropClasses = [classes["Backdrop"]];
        if(this.props.opacity === "translucent" ){
            backdropClasses.push(classes["backdrop--translucent"])
        }
        if(this.props.opacity === "transparent"){
            backdropClasses.push(classes["backdrop--transparent"])
        }
        return (
            <div className={backdropClasses.join(' ')} onClick={this.props.hideBackdrop}></div>
        );
    }
}

export default Backdrop;