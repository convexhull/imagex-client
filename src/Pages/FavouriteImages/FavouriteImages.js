import React, { Component } from 'react';


import ImageGrid from '../../components/FavouriteImages/ImageGrid/ImageGrid';
import classes from './FavouriteImages.module.css';


class FavouriteImages extends Component {

    render(){
        return (
          <div className={classes["Favourite-images"]}>
            {/* <div className={classes["profile__navigation"]}>
              <h3 className={classes["profile__navlink"]}>
                <i class="fa fa-heart" aria-hidden="true"></i>
                &nbsp;&nbsp;Favourites
              </h3>
            </div> */}
            <ImageGrid />
          </div>
        );
    }
}



export default FavouriteImages;