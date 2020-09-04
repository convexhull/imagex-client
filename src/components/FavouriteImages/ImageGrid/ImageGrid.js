import React, { Component } from 'react';
import { connect } from 'react-redux';


import classes from './ImageGrid.module.css';
import ImageModal from '../ImageModal/ImageModal';
import * as actions from '../../../store/actions/index';


class ImageGrid extends Component {

  state = {
    showImageModal : false,
    selectedImage: '',
    hoveredOverImageId: ''
  }

  componentDidMount() {
    this.props.onFetchFavourites();
  }

  imageClickHandler = (image) => {
    this.setState({showImageModal : true, selectedImage: image})
  }

  hideModalHandler = () => {
    this.setState({showImageModal : false})
  }


  displayImageOverlay = (id) => {
    this.setState({
      hoveredOverImageId: id
    })
  }

  removeImageOverlay = () => {
    this.setState({
      hoveredOverImageId: ''
    })
  }


  removeImage = (imageId) => {
    setTimeout(() => {
      this.props.onRemoveFavouriteImage(imageId);
      this.props.onFetchFavourites();
    },0);
  }

  render() {
    let imagesToDisplay = this.props.images.map((image) => {
      let imgOrientation = (image.width >= image.height ? "landscape" : "portrait") ; 
      let imageOptionsClasses = [classes["image__options"]];
      if(image._id === this.state.hoveredOverImageId){
        imageOptionsClasses.push(classes["image__options--visible"]);
      }
      return (
        <div className={classes[imgOrientation] + " " + classes["image__box"]} onMouseEnter={()=>this.displayImageOverlay(image._id)} onMouseOver={() => this.displayImageOverlay(image._id)} onMouseLeave={this.removeImageOverlay} >
          <img
            src={image.smallImageUrl}
            alt="image"
            onClick={() => this.imageClickHandler(image)}
          />
          <div
            className={classes["image__overlay"]}
            onClick={() => this.imageClickHandler(image)}
          >
          </div>
          <div className={imageOptionsClasses.join(" ")}>
            <div
              className={classes["like-btn"]}
              onClick={() => this.removeImage(image._id)}
            >
              <span>
                <i class="fas fa-heart"></i>
              </span>
            </div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={`${image.downloadUrl}?force=true`}
                rel="nofollow"
                target="_blank"
              >
                <span class="_2Aga-">Download</span>
              </a>
            </div>
          </div>
        </div>
      );
    })



    return (
      <div>
        {this.state.showImageModal ? (
          <ImageModal
            show={this.state.showImageModal}
            hideImageModal={this.hideModalHandler}
            image={this.state.selectedImage}
          />
        ) : null}
        <div className={classes["profile__navigation"]}>
          <h3 className={classes["profile__navlink"]}>
            <i class="fa fa-heart" aria-hidden="true"></i>
            &nbsp;&nbsp;My Favourites ({imagesToDisplay.length})
          </h3>
        </div>
        <div className={classes["image-grid"]}>{imagesToDisplay}</div>
      </div>
    );
  }
}





const mapStateToProps = (state) => {
  return {
    images: state.favourites.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFavourites: () => dispatch(actions.asyncFetchFavouriteImagesStart()),
    onRemoveFavouriteImage: (imageId) => dispatch(actions.asyncRemoveFavouriteImageStart(imageId))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);