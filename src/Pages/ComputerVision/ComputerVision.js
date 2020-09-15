import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ComputerVision.module.css";
import * as actions from "../../store/actions";
import CameraIcon from "../../assets/icons/camera.svg";
import Spinner from '../../components/UI/AwsSpinner/spinner.gif';

class CV extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }

  state = {
    formData: {
      file: null,
    }
  };

  clickHandler = () => {
    this.fileRef.current.click();
  };

  fileUploadHandler = (event) => {
    let file = event.target.files[0];
    if(file.size > 5000000){
      alert('Your file exceeds the maximum supported size limit of 5MB. Please upload a smaller file.');
      this.fileRef.current.value = null;
      return ;
    }
    this.setState({
      formData: {
        file
      }
    });
  };

 
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.formData.file && this.state.formData.file) {
      this.props.onImageUpload(this.state.formData, this.props.history);
    }
  }

  render() {
    if(this.props.loading){
      return (
        <div className={classes["spinner"]}>
          <img src={Spinner} alt="loading" />
          <p className={classes["spinner__text"]}>Bringing you similar images from the web. Our AI algorithms are at work...</p>
        </div>
      );
    }
    return (
      <div className={classes["CV"]}>
        <div className={classes["container"]}>
          <form className={classes["form"]}>
            <div className={classes["form__image"]}>
              <img src={CameraIcon} alt="camera icon" />
            </div>
            <p className={classes["form__title"]}>
              Upload an image to find similar
            </p>
            <input
              className={classes["form__file"]}
              ref={this.fileRef}
              accept="image/jpg, image/jpeg, image/png"
              type="file"
              onChange={this.fileUploadHandler}
              required
            />
            <button
              type="button"
              className={classes["form__btn"]}
              onClick={this.clickHandler}
            >
              Upload
            </button>
          </form>
          <p className={classes["container__image-constraints"]}>
            <small>We only support JPG and PNG images under 5MB.</small>
          </p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    uploadedImageId: state.cv.uploadedImageId,
    loading: state.cv.imageUploading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onImageUpload: (data, history) => dispatch(actions.asyncCvImageUploadStart(data, history)),
    // onClearPreviousSearch: () => dispatch(actions.cvClearPreviousSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CV);
