import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './ImageGrid.module.css';
import * as actions from "../../../store/actions/index";
import ImageModal from "../ImageModal/ImageModal";
import ImageUtils from '../../../utils/imageOrientation';


class ImageGrid extends Component {

  state = {
    showImageModal : false,
    selectedImage: '',
    hoveredOverImageId: "",
    justLikedImageIds: []
  }

  imageClickHandler = (image) => {
    this.setState({showImageModal : true, selectedImage: image})
  }

  hideModalHandler = () => {
    this.setState({showImageModal : false})
  }

  likeBtnHandler = (image) => {
    this.setState((state,props) => {
      return {
        justLikedImageIds: [...state.justLikedImageIds , image.id]
      }
    });
    this.props.onAddToFavourites(image, "cv", this.props.history);
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
      let imgOrientation = ImageUtils.findOrientationClass(image.aspect);
      let imageOptionsClasses = [classes["image__options"]];
      let likeBtnClasses = [classes["like-btn"]];
      if (image.id === this.state.hoveredOverImageId) {
        imageOptionsClasses.push(classes["image__options--visible"]);
      }
      if(this.state.justLikedImageIds.includes(image.id)){
        likeBtnClasses.push(classes["like-btn--liked"])
      }
      return (
        <div className={classes[imgOrientation] + " " + classes["image__box"]} key={image.id}  onMouseEnter={() => this.displayImageOverlay(image.id)} onMouseLeave={this.removeImageOverlay}>
          <img src={image.assets.preview_1000.url} alt={image.description ? image.description : "search result"} />
          <div
            className={classes["image__overlay"]}
            onClick={() => this.imageClickHandler(image)}
          >
          </div>
          <div className={imageOptionsClasses.join(" ")}>
            <div
              className={likeBtnClasses.join(' ')}
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
                <span className="_2Aga-"><i class="fa fa-download" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div>
        <div className={classes["image-grid"]}>
          {this.state.showImageModal ? (
            <ImageModal
              show={this.state.showImageModal}
              hideImageModal={this.hideModalHandler}
              image={this.state.selectedImage}
            />
          ) : null}
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
    onAddToFavourites: (image, platform, history) =>
      dispatch(actions.asyncSaveFavouriteImageStart(image, platform, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageGrid));






