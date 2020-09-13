import React , { Component } from 'react';
import { connect } from 'react-redux';


import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';
import * as actions from '../../../store/actions/index';
import GeneralUtils from '../../../utils/generalUtils';


class ImageModal extends Component {


    removeFavouriteImage = (imageId) => {
        this.props.hideImageModal();
        this.props.onRemoveFavouriteImage(imageId);
        this.props.onFetchFavourites();
    }
  
    render(){
        let imageDescription = this.props.image.description || this.props.image.alt_description;
        imageDescription = GeneralUtils.capitalizeFirstLetter(imageDescription);
        return (
            <Modal hideModal={this.props.hideImageModal} >
                <div className={classes["image-header"]}>
                    {/* <div className={classes["user-info"]}>
                        <div>
                            <img src={this.props.image.user.profile_image.large } alt="user image" />
                        </div>
                        <p><strong>{this.props.image.user.name}</strong></p>
                        <p>@{this.props.image.user.username}</p>
                    </div> */}
                    <div className={classes["actions"]}>
                        <div className={classes["icons"]} onClick={() => this.removeFavouriteImage(this.props.image._id)}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div className={classes["download-button"]}>
                            <a title="Download photo" href={`${this.props.image.downloadUrl}?force=true`}  rel="noopener noreferrer"  target="_blank"><span className="_2Aga-">Download</span></a>
                        </div>
                    </div>
                </div>
                <div className={classes["image-container"]}>
                    <img src={this.props.image.mediumImageUrl} alt={this.props.image.alt_description || this.props.image.description || 'alternate definition'}  />
                </div>
                <br />
                <div className={classes["image-footer"]}>
                    {imageDescription}
                </div>
            </Modal>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavourites: (image, platform) => dispatch(actions.asyncSaveFavouriteImageStart(image, platform)),
        onRemoveFavouriteImage: (imageId) => dispatch(actions.asyncRemoveFavouriteImageStart(imageId)),
        onFetchFavourites: () => dispatch(actions.asyncFetchFavouriteImagesStart())
    }
}


export default connect(null, mapDispatchToProps)(ImageModal);