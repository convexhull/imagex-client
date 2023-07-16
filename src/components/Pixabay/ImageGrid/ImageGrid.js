import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import classes from "./ImageGrid.module.css";
import ImageModal from "../../Common/UI/ImageModal/ImageModal";
import ImageUtils from "../../../utils/imageOrientation";
import { withRouter } from "react-router-dom";

class ImageGrid extends Component {
  state = {
    showImageModal: false,
    selectedImage: "",
    hoveredOverImageId: "",
    justLikedImageIds: [],
  };

  imageClickHandler = (image) => {
    this.setState({ showImageModal: true, selectedImage: image });
  };

  hideModalHandler = () => {
    this.setState({ showImageModal: false });
  };

  likeBtnHandler = (image) => {
    this.setState((state, props) => {
      return {
        justLikedImageIds: [...state.justLikedImageIds, image.id],
      };
    });
    this.props.onAddToFavourites(image, "pixabay", this.props.history);
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

  render() {
    let imagesToDisplay = this.props.images.map((image, index) => {
      let imgOrientation = ImageUtils.calculateOrientationClass(
        image.imageWidth,
        image.imageHeight
      );
      let imageOptionsClasses = [classes["image__options"]];
      let likeBtnClasses = [classes["like-btn"]];
      if (image.id === this.state.hoveredOverImageId) {
        imageOptionsClasses.push(classes["image__options--visible"]);
      }
      if (this.state.justLikedImageIds.includes(image.id)) {
        likeBtnClasses.push(classes["like-btn--liked"]);
      }
      return (
        <div
          className={classes[imgOrientation] + " " + classes["image__box"]}
          key={image.id}
          onMouseEnter={() => this.displayImageOverlay(image.id)}
          onMouseLeave={this.removeImageOverlay}
        >
          <img
            src={image.largeImageURL}
            alt={image.tags ? image.tags : "search result"}
          />
          <div
            className={classes["image__overlay"]}
            onClick={() => this.imageClickHandler(image)}
          ></div>
          <div className={imageOptionsClasses.join(" ")}>
            <div
              className={likeBtnClasses.join(" ")}
              onClick={() => this.likeBtnHandler(image)}
            >
              <span>
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={image.largeImageURL}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span className="_2Aga-">
                  <i class="fa fa-download" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      );
    });
    const image = this.state.selectedImage;

    return (
      <div>
        {this.state.showImageModal ? (
          <ImageModal
            hideImageModal={this.hideModalHandler}
            image={image}
            platform="pixabay"
            imageDescription={
              image.description || image.alt_description || image.tags
            }
            uploaderProfileImageUrl={
              image.userImageURL ||
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__480.png"
            }
            uploaderName={image.user.name}
            uploaderUsername={image.user}
            imageDownloadUrl={image.largeImageURL}
            imageUrl={image.largeImageURL}
          />
        ) : null}
        <div className={classes["image-grid"]}>{imagesToDisplay}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.pixabay.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToFavourites: (image, platform, history) =>
      dispatch(actions.asyncSaveFavouriteImageStart(image, platform, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ImageGrid));
