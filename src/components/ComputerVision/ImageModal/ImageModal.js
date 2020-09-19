import React , { Component } from 'react';
import { connect } from 'react-redux';


import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';
import * as actions from '../../../store/actions/index';
import GeneralUtils from '../../../utils/generalUtils';


class ImageModal extends Component {
    state = {
        liked: false
    }

    likeBtnHandler = () => {
        this.setState({
            liked: true
        });
        this.props.onAddToFavourites(this.props.image, "cv")
    }
  
    render(){
        let imageDescription = this.props.image.description || this.props.image.alt_description;
        imageDescription = GeneralUtils.capitalizeFirstLetter(imageDescription);
        let likeBtnClasses = [classes["icons"]];
        if(this.state.liked){
            likeBtnClasses.push(classes["like-btn--liked"]);
        }
        return (
            <Modal hideModal={this.props.hideImageModal} >
                <div className={classes["image-header"]}>
                    <div className={classes["actions"]}>
                        <div className={likeBtnClasses.join(' ')} onClick={this.likeBtnHandler}>
                            <ion-icon name="heart"></ion-icon>
                        </div>
                        <div className={classes["download-button"]}>
                            <a title="Download photo" href={`${this.props.image.assets.preview_1500.url}?force=true`} rel="noopener noreferrer" target="_blank"  ><span className="_2Aga-"><i class="fa fa-download" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
                <div className={classes["image-container"]}>
                    <img src={this.props.image.assets.preview_1000.url} alt={this.props.image.alt_description || this.props.image.description || 'alternate definition'}  />
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
        onAddToFavourites: (image, platform) => dispatch(actions.asyncSaveFavouriteImageStart(image, platform))
    }
}


export default connect(null, mapDispatchToProps)(ImageModal);