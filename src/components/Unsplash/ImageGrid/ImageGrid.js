import React, { Component } from 'react';
import classes from './ImageGrid.module.css';
import SingleImage from '../SingleImage/SingleImage';


class ImageGrid extends Component {

  state = {
    showImageModal : false
  }

  imageClickHandler = () => {
    this.setState({showImageModal : true})
  }

  render() {
    let images1 = this.props.images.map((image) => {
      let imgOrientation = (image.width >= image.height ? "landscape" : "portrait") ; 
      return (
        <div className={classes[imgOrientation]}>
          <img src={image.urls.small} alt="image" onClick={this.imageClickHandler} />
        </div>
      );
    })

    return (
      <div>
        {this.state.showImageModal ? <SingleImage /> : null}
        <div className={classes["image-grid"]}>
          {images1}
        </div>
      </div>
    );
  }

}


export default ImageGrid;