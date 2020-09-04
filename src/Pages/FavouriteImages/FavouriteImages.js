import React, { Component } from 'react';


import ImageGrid from '../../components/FavouriteImages/ImageGrid/ImageGrid';
import classes from './FavouriteImages.module.css';


class FavouriteImages extends Component {

    render(){
        return (
          <div className={classes["Favourite-images"]}>
            <ImageGrid />
          </div>
        );
    }
}



export default FavouriteImages;