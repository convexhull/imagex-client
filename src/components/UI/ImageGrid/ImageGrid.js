import React, { Component } from 'react';
import classes from './ImageGrid.module.css';


class ImageGrid extends Component {

    render(){
        let images = this.props.images.map((image) => (
          <div>
            <img src={image.urls.small} alt="shit" />
          </div>
        ));
        
        return (
          <div>
            <div className={classes["image-grid"]}>
                {images}
            </div>
          </div>
        );
    }


}




export default ImageGrid;