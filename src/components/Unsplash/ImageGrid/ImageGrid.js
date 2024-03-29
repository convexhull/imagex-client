import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import classes from "./ImageGrid.module.css";
import ImageModal from "../../Common/UI/ImageModal/ImageModal";
import * as actions from "../../../store/actions/index";
import ImageUtils from "../../../utils/imageOrientation";

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
    this.props.onAddToFavourites(image, "unsplash", this.props.history);
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
    let imagesToDisplay = this.props.images.map((image) => {
      let imgOrientation = ImageUtils.calculateOrientationClass(
        image.width,
        image.height
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
          onMouseEnter={() => this.displayImageOverlay(image.id)}
          onMouseLeave={this.removeImageOverlay}
          key={image.id}
        >
          <img
            src={image.urls.small}
            alt={image.description || image.alt_description || ""}
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
                href={`${image.links.download}?force=true`}
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
            image={this.state.selectedImage}
            platform="unsplash"
            imageDescription={image.description || image.alt_description}
            uploaderProfileImageUrl={image.user.profile_image.large}
            uploaderName={image.user.name}
            uploaderUsername={image.user.username}
            imageDownloadUrl={image.links.download}
            imageUrl={image.urls.regular}
          />
        ) : null}
        <div className={classes["image-grid"]}>{imagesToDisplay}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.unsplash.images,
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
