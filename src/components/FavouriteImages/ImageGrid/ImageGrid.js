import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ImageGrid.module.css";
import ImageModal from "../ImageModal/ImageModal";
import * as actions from "../../../store/actions/index";
import ImageUtils from '../../../utils/imageOrientation';

class ImageGrid extends Component {

  state = {
    showImageModal: false,
    selectedImage: "",
    hoveredOverImageId: "",
    removedImageId: ""
  };

  componentDidMount() {
    this.props.onFetchFavourites();
  }

  imageClickHandler = (image) => {
    this.setState({ showImageModal: true, selectedImage: image });
  };

  hideModalHandler = () => {
    this.setState({ showImageModal: false });
  };

  displayImageOverlay = (id) => {
    this.setState({
      hoveredOverImageId: id,
    });
  };

  removeImageOverlay = () => {
    this.setState({
      hoveredOverImageId: "",
    });
  };

  removeImage = (imageId) => {
    this.setState({
      removedImageId: imageId
    })
    this.props.onRemoveFavouriteImage(imageId);
    this.props.onFetchFavourites();
  };

  render() {
    let filteredImages = this.props.images.filter((image) => image._id !== this.state.removedImageId);
    let imagesToDisplay = filteredImages.map((image) => {
      let imgOrientation = ImageUtils.findOrientationClass(image.aspect);
      let imageOptionsClasses = [classes["image__options"]];
      if (image._id === this.state.hoveredOverImageId) {
        imageOptionsClasses.push(classes["image__options--visible"]);
      }
      return (
        <div
          className={classes[imgOrientation] + " " + classes["image__box"]}
          onMouseEnter={() => this.displayImageOverlay(image._id)}
          onMouseOver={() => this.displayImageOverlay(image._id)}
          onMouseLeave={this.removeImageOverlay}
          key={image._id}
        >
          <img
            src={image.mediumImageUrl}
            alt="user's favourite"
            onClick={() => this.imageClickHandler(image)}
          />
          <div
            className={classes["image__overlay"]}
            onClick={() => this.imageClickHandler(image)}
          ></div>
          <div className={imageOptionsClasses.join(" ")}>
            <div
              className={classes["like-btn"]}
              onClick={() => this.removeImage(image._id)}
            >
              <span>
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={`${image.downloadUrl}?force=true`}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span className="_2Aga-"><i class="fa fa-download" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {this.state.showImageModal ? (
          <ImageModal
            show={this.state.showImageModal}
            hideImageModal={this.hideModalHandler}
            image={this.state.selectedImage}
          />
        ) : null}
        <h1 className={classes["favourites-section__title"]}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            &nbsp;&nbsp;My Favourites ({imagesToDisplay.length})
        </h1>
        <div className={classes["image-grid"]}>{imagesToDisplay}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.favourites.images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFavourites: () => dispatch(actions.asyncFetchFavouriteImagesStart()),
    onRemoveFavouriteImage: (imageId) =>
      dispatch(actions.asyncRemoveFavouriteImageStart(imageId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
