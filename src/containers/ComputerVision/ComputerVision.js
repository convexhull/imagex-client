import React, { Component } from 'react';
import { connect } from 'react-redux';


import classes from './ComputerVision.module.css';
import * as actions from '../../store/actions';

class CV extends Component {

    constructor(props){
        super(props);
        this.fileRef = React.createRef();
    }


    state = {
        formData : {
            file: null
        }
    }

    clickHandler = () => {
        this.fileRef.current.click();
    }


    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSimilarImagesSearch(this.state.formData);
    }

    fileUploadHandler = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            formData: {
                file: event.target.files[0]
            }
        })
    }

    render() {
        return (
            <div  className={classes["CV"]}>
                <div className={classes["container"]}>
                    <form onSubmit={this.formSubmitHandler}>
                        <div>

                        </div>
                        <p>Drag and drop an image to find similar</p>
                        <input ref={this.fileRef} accept="image/jpeg image/png image/jpeg" type="file" onChange={this.fileUploadHandler} required hidden/>
                        <button type="button" onClick={this.clickHandler}>Shit</button>
                        <button>Hit</button>
                    </form>
                    <p className={classes["container__image-constraints"]}><small>We only support JPG and PNG images under 5MB.</small></p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSimilarImagesSearch: (data) => dispatch(actions.asyncSimilarImagesSearchStart(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CV);