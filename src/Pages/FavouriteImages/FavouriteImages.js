import React, { Component } from 'react';
import { connect } from 'react-redux';


import ImageGrid from '../../components/FavouriteImages/ImageGrid/ImageGrid';
import classes from './FavouriteImages.module.css';


class FavouriteImages extends Component {


    componentDidMount() {
      if(!this.props.isAuthenticated){
        this.props.history.replace('/login');
      }
    }    

    render(){
        return (
          <div className={classes["Favourite-images"]}>
            <ImageGrid />
          </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}


export default connect(mapStateToProps)(FavouriteImages);