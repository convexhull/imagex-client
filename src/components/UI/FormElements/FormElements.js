import React , { Component } from 'react';

import classes from './FormElements.module.css';


class FormElements extends Component {

    render(){
        let inputElement = null;
        let cssClasses = [ classes["text-input"] ];
        switch(this.props.elementType) {
            case "text" : 
                inputElement = (
                    <React.Fragment>
                        <label>{this.props.label}</label>
                        <input
                            className={cssClasses.join(' ')}
                            type="text"
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                        />
                    </React.Fragment>
                )
                break;
            case "password":
                inputElement = (
                    <React.Fragment>
                        <label>{this.props.label}</label>
                        <input
                            type="password"
                            className={cssClasses.join(' ')}
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                        />
                    </React.Fragment>
                    
                )
                break;
            case "email":
                inputElement = (
                    <React.Fragment>
                        <label>{this.props.label}</label>
                        <input
                            className={cssClasses.join(' ')}
                            type="email"
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                        />
                    </React.Fragment>
                )
                break;
            default:
                inputElement = (
                    <input
                        className={cssClasses.join(' ')}
                        type="text"
                        value={this.props.value}
                        required={this.props.required}
                        onChange={this.props.onChange}
                    />
                )
        }
        return inputElement;
    }
}


export default FormElements;