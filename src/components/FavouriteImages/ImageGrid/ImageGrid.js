import React, { Component } from 'react';
import { connect } from 'react-redux';


import classes from './ImageGrid.module.css';
import ImageModal from '../ImageModal/ImageModal';
import * as actions from '../../../store/actions/index';


class ImageGrid extends Component {

  state = {
    showImageModal : false,
    selectedImage: ''
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

  render() {
    let images1 = this.props.images.map((image) => {
      let imgOrientation = (image.width >= image.height ? "landscape" : "portrait") ; 
      return (
        <div className={classes[imgOrientation]}>
          <img src={image.smallImageUrl} alt="image" onClick={() => this.imageClickHandler(image)} />
        </div>
      );
    })

    return (
      <div>
        {this.state.showImageModal ? <ImageModal show={this.state.showImageModal} hideImageModal={this.hideModalHandler} image={this.state.selectedImage}/> : null}
        <div className={classes["image-grid"]}>
          {images1}
        </div>
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
    onFetchFavourites: () => dispatch(actions.asyncFetchFavouriteImagesStart())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);