import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ImageGrid.module.css';
import * as actions from "../../../store/actions/index";
import ImageModal from "../ImageModal/ImageModal";


class ImageGrid extends Component {

  state = {
    showImageModal : false,
    selectedImage: ''
  }

  imageClickHandler = (image) => {
    this.setState({showImageModal : true, selectedImage: image})
  }

  hideModalHandler = () => {
    this.setState({showImageModal : false})
  }

  likeBtnHandler = (image) => {
    this.props.onAddToFavourites(image, "cv");
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
      let imgOrientation = (image.imageWidth >= image.imageHeight ? "landscape" : "portrait"); 
      let imageOptionsClasses = [classes["image__options"]];
      if (image.id === this.state.hoveredOverImageId) {
        imageOptionsClasses.push(classes["image__options--visible"]);
      }
      return (
        <div className={classes[imgOrientation] + " " + classes["image__box"]} key={image.id}  onMouseEnter={() => this.displayImageOverlay(image.id)} onMouseLeave={this.removeImageOverlay}>
          <img src={image.assets.preview.url} alt={image.description ? image.description : "search result"} />
          <div
            className={classes["image__overlay"]}
            onClick={() => this.imageClickHandler(image)}
          >
          </div>
          <div className={imageOptionsClasses.join(" ")}>
            <div
              className={classes["like-btn"]}
              onClick={() => this.likeBtnHandler(image)}
            >
              <span>
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={`${image.assets.preview_1500.url}?force=true`}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span className="_2Aga-">Download</span>
              </a>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div>
        <div className={classes["image-grid"]}>
          {imagesToDisplay}
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    images: state.cv.similarImages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAddToFavourites: (image, platform) =>
      dispatch(actions.asyncSaveFavouriteImageStart(image, platform)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);






