import React, { Component } from 'react';
import classes from './ImageGrid.module.css';


class ImageGrid extends Component {

    render(){
      let images1 = this.props.images.map( (image) => {
        if(image.width > image.height){
          return (
            <div className={classes.landscape}>
              <img src={image.urls.small} alt="image" />
            </div>
          )
        }
        else {
          return (
            <div className={classes.portrait}>
              <img src={image.urls.small} alt="image" />
            </div>
          )
        }
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




export default ImageGrid;