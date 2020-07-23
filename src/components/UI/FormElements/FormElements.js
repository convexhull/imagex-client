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
                            required={this.props.required}
                            onChange={this.props.onChange}
                        />
                    </React.Fragment>
                    
                )
                break;
            case "password":
                inputElement = (
                    <input
                        type="password"
                        required={this.props.required}
                        onChange={this.props.onChange}
                    />
                )
                break;
            case "email":
                inputElement = (
                    <React.Fragment>
                        <label>{this.props.label}</label>
                        <input
                            className={cssClasses.join(' ')}
                            type="email"
                            required={this.props.required}
                            onChange={this.props.onChange}
                        />
                    </React.Fragment>
                )
                break;
            // default:
            //     inputElement = (
            //         <input
            //             className={cssClasses.join(' ')}
            //             type="text"
            //             required={this.props.required}
            //             onChange={this.props.onChange}
            //         />
            //     )
        }
        return inputElement;
    }
}


export default FormElements;