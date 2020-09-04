import React, { Component } from 'react';
import classes from './ImageGrid.module.css';
import ImageModal from '../ImageModal/ImageModal';


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

  render() {
    let imagesToDisplay = this.props.images.map((image) => {
      let imgOrientation = (image.imageWidth >= image.imageHeight ? "landscape" : "portrait") ; 
      return (
        <div className={classes[imgOrientation]} key={image.id}>
          <img src={image.largeImageURL} alt={image.tags ? image.tags :  "search result"} onClick={() => this.imageClickHandler(image)} />
        </div>
      );
    })

    return (
      <div>
        {this.state.showImageModal ? <ImageModal show={this.state.showImageModal} hideImageModal={this.hideModalHandler} image={this.state.selectedImage}/> : null}
        <div className={classes["image-grid"]}>
          {imagesToDisplay}
        </div>
      </div>
    );
  }
}


export default ImageGrid;

