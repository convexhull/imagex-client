import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ComputerVision.module.css";
import * as actions from "../../store/actions";
import CameraIcon from "../../assets/icons/camera.svg";

class CV extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }

  state = {
    formData: {
      file: null,
    },
  };

  clickHandler = () => {
    this.fileRef.current.click();
  };

  fileUploadHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      formData: {
        file: event.target.files[0],
      },
    });
  };

  componentDidUpdate() {
    this.props.onImageUpload(this.state.formData);
    this.props.history.push("/photos/computer-vision");
  }

  render() {
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
              ref={this.fileRef}
              accept="image/*"
              type="file"
              onChange={this.fileUploadHandler}
              required
              hidden
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

const mapDispatchToProps = (dispatch) => {
  return {
    onImageUpload: (data) => dispatch(actions.asyncCvImageUploadStart(data)),
  };
};

export default connect(null, mapDispatchToProps)(CV);
