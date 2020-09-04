import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ImageGrid.module.css';


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
    let images1 = this.props.images.map((image) => {
      let imgOrientation = (image.imageWidth >= image.imageHeight ? "landscape" : "portrait") ; 
      return (
        <div className={classes[imgOrientation]} key={image.id}>
          <img src={image.assets.preview.url} alt={image.description ? image.description : "search result"} onClick={() => this.imageClickHandler(image)} />
        </div>
      );
    })
    return (
      <div>
        <div className={classes["image-grid"]}>
          {images1}
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


export default connect(mapStateToProps)(ImageGrid);






