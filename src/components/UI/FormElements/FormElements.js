import React , { Component } from 'react';

import classes from './FormElements.module.css';


class FormElements extends Component {

    render(){
        let inputElement = null;
        let cssClasses = [ classes["text-input"] ];
        let labelCssClasses = [classes["text-input__label"]];

        if(!this.props.valid) {
            cssClasses.push(classes["text-input--invalid"]);
            labelCssClasses.push(classes["text-input__label--invalid"]);
        }
        switch(this.props.elementType) {
            case "text" : 
                inputElement = (
                    <React.Fragment>
                        <label className={labelCssClasses.join(' ')}>{this.props.label}</label>
                        <input
                            className={cssClasses.join(' ')}
                            type="text"
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                            disabled={this.props.disabled}
                        />
                        {!this.props.valid ? <p className={classes["text-input__error-msg"]}>{this.props.errorMsg}</p> : null }
                    </React.Fragment>
                );
                break;
            case "password":
                inputElement = (
                    <React.Fragment>
                        <label className={labelCssClasses.join(' ')}>{this.props.label}</label>
                        <input
                            type="password"
                            className={cssClasses.join(' ')}
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                            disabled={this.props.disabled}
                        />
                        {!this.props.valid ? <p className={classes["text-input__error-msg"]}>{this.props.errorMsg}</p> : null }
                    </React.Fragment>
                    
                )
                break;
            case "email":
                inputElement = (
                    <React.Fragment>
                        <label className={labelCssClasses.join(' ')}>{this.props.label}</label>
                        <input
                            className={cssClasses.join(' ')}
                            type="email"
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                            disabled={this.props.disabled}
                        />
                        {!this.props.valid ? <p className={classes["text-input__error-msg"]}>{this.props.errorMsg}</p> : null }
                    </React.Fragment>
                )
                break;
            case "textarea":
                cssClasses.push(classes["text-area"]);
                inputElement = (
                    <React.Fragment>
                        <label className={labelCssClasses.join(' ')}>{this.props.label}</label>
                        <textarea
                            className={cssClasses.join(' ')}
                            value={this.props.value}
                            required={this.props.required}
                            onChange={this.props.onChange}
                            disabled={this.props.disabled}
                        />
                        {!this.props.valid ? <p className={classes["text-input__error-msg"]}>{this.props.errorMsg}</p> : null }
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
                        disabled={this.props.disabled}
                    />
                )
        }
        return inputElement;
    }
}


export default FormElements;